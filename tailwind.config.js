/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fbfaf7',
          100: '#f6f2e8',
          200: '#efe6d4',
          300: '#e5d4b6',
          400: '#d6bb90',
        },
        taupe: {
          50: '#f7f5f3',
          100: '#ede7e2',
          200: '#d8cec5',
          300: '#bdaea3',
          400: '#9f8a7e',
          500: '#836b5f',
          600: '#6a5348',
          700: '#523f37',
          800: '#3f302b',
          900: '#2b221f',
        },
        cacao: {
          600: '#4a362f',
          700: '#3b2a25',
          800: '#2b1f1b',
        },
        gold: {
          200: '#f3e4b2',
          300: '#e9cf83',
          400: '#d9b457',
        },
        sage: {
          200: '#d7e3da',
          300: '#b8cbbf',
          500: '#6f8b7b',
        },
        rose: {
          200: '#f2d8dc',
          400: '#d6a4ad',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(217, 180, 87, 0.35), 0 20px 45px rgba(31, 24, 21, 0.25)',
        soft: '0 20px 60px rgba(31, 24, 21, 0.14)',
      },
      backgroundImage: {
        'hero-wash':
          'radial-gradient(1200px 600px at 20% 10%, rgba(233, 207, 131, 0.16), transparent 60%), radial-gradient(900px 500px at 80% 40%, rgba(111, 139, 123, 0.14), transparent 55%), linear-gradient(to bottom, rgba(43, 34, 31, 0.62), rgba(43, 34, 31, 0.78))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

