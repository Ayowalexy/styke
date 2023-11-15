import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/hero.png')",
        'logo': "url('/images/svgs/logo.svg')"
      },
      fontFamily: {
        sans: ['var(--font-poppins)']
      },
      colors: {
        primary: "#003E9A"
      }
    },
  },
  plugins: [],
}
export default config
