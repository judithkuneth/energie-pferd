export async function submitRetreat(action: string, data: FormData) {
  const response = await fetch(`${action}?isAjax=1`, {
    method: 'POST',
    body: data,
    signal: AbortSignal.timeout(30000),
  })
  if (!response.ok) throw new Error('submission-failed')
  const result: unknown = await response.json()
  if (!result || typeof result !== 'object' || !('success' in result) || result.success !== true) {
    throw new Error('submission-not-confirmed')
  }
}
