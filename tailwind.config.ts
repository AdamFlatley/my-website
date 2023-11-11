import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/components/**/**/*.{js,jsx,ts,tsx}",
    './src/app/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tw-elements-react/dist/js/**/*.js',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         'pinky-good': 'bg-gradient-to-r from-purple-500 to-pink-500',
      },
      keyframes: {
        grow: {
          '0%': { transform: ' scale(1.00)' },
          '10%': { transform: ' scale(1.02)' },
          '20%': { transform: ' scale(1.04)' },
          '30%': { transform: ' scale(1.06)' },
          '40%': { transform: ' scale(1.08)' },
          '50%': { transform: ' scale(1.1)' },
          '60%': { transform: ' scale(1.12)' },
          '100%': { transform: ' scale(1.12)' },
        },
        growLess: {
          '0%': { transform: ' scale(1.00)' },
          '10%': { transform: ' scale(1.01)' },
          '20%': { transform: ' scale(1.02)' },
          '30%': { transform: ' scale(1.03)' },
          '40%': { transform: ' scale(1.04)' },
          '50%': { transform: ' scale(1.05)' },
          '60%': { transform: ' scale(1.06)' },
          '100%': { transform: ' scale(1.06)' },
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

  plugins: [require('@tailwindcss/typography')],
}
export default config
