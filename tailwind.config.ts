import type { Config } from 'tailwindcss'

import { colors } from './src/theme/color'
import { fontSize } from './src/theme/fonts'
import { borderRadius } from './src/theme/radius'
import { screens } from './src/theme/screen'
import { spacing } from './src/theme/space'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ...colors
      },
      spacing: {
        ...spacing
      },
      borderRadius: {
        ...borderRadius
      },
      fontSize: {
        ...fontSize
      }
    },
    screens: {
      ...screens
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem'
      }
    }
  },

  darkMode: 'class'
} satisfies Config
