import assert from 'node:assert/strict'
import fs from 'node:fs'
import ts from 'typescript'

const source = fs.readFileSync('src/services/submitRetreat.ts', 'utf8')
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText
const { submitRetreat } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)
const realFetch = globalThis.fetch
const data = new FormData()
data.set('EMAIL', 'test@example.invalid')
data.set('OPT_IN', '1')
try {
  globalThis.fetch = async (url, options) => {
    assert.equal(url, 'https://example.invalid/form?isAjax=1')
    assert.equal(options.method, 'POST')
    assert.equal(options.body, data)
    assert.equal(options.body.get('OPT_IN'), '1')
    return Response.json({ success: true })
  }
  await submitRetreat('https://example.invalid/form', data)
  for (const result of [{ success: false }, { success: 'true' }, {}, null]) {
    globalThis.fetch = async () => Response.json(result)
    await assert.rejects(submitRetreat('https://example.invalid/form', data))
  }
  globalThis.fetch = async () => new Response('error', { status: 500 })
  await assert.rejects(submitRetreat('https://example.invalid/form', data))
  globalThis.fetch = async () => new Response('<html>Not a confirmation</html>')
  await assert.rejects(submitRetreat('https://example.invalid/form', data))
  globalThis.fetch = async () => { throw new TypeError('Network unavailable') }
  await assert.rejects(submitRetreat('https://example.invalid/form', data))
  console.log('Retreat submission: success, rejection, unexpected response, HTTP and network failures passed. No network requests sent.')
} finally {
  globalThis.fetch = realFetch
}
