import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/components/**/**/*.{js,jsx,ts,tsx}",
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tw-elements-react/dist/js/**/*.js',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        grow: {
          '0%': { transform: ' scale(1.00)' },
          '33%': { transform: ' scale(1.06)' },
          '66%': { transform: ' scale(1.12)' },
          '100%': { transform: ' scale(1.20)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
        grow: 'grow 0.5s ease-in-out forwards',
      }
    }
  },

  plugins: [require("tw-elements-react/dist/plugin.cjs"), require("tw-elements/dist/plugin.cjs")],
}
export default config
