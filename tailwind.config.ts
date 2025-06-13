import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#FFD54F',
      },
    },
  },
  plugins: [],
}
export default config
