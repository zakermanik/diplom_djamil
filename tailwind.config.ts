/* eslint-env node */
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    colors: {
      bg_main: '#F5F5F7',
      bg_card: '#FFFFFF',
      bg_light_fill_element: '#F5F7FA',
      text_main: '#1D1D1F',
      text_supporting: '#706E73',
      text_placeholder: '#86868B',
      text_no_active: '#606266',
      text_blocked: '#C0C4CC',
      text_light: '#FFFFFF',
      text_primary: '#303133',
      brand_blue: '#0071E3',
      brand_blue_blocked: '#7BB4EE',
      system_orange: '#E6A23C',
      system_red: '#F56C6C',
      system_green: '#67C23A',
      system_ocean: '#42C5B5',
      system_purple: '#523CD8',
      border_stroke_element: '#D2D2D7',
      border_light_stroke_element: '#F2F2F3',
      border_blocked_stroke_element: '#F2F2F3',
      border_orange: '#FAECD8',
      border_red: '#FDE2E2',
      border_green: '#E1F3D8',
      border_blue: '#D9ECFF',
      border_ocean: '#CFF6ED',
      border_purple: '#E5D9FF',
      fill_orange: '#FDF6EC',
      fill_red: '#FEF0F0',
      fill_green: '#F0F9EB',
      fill_blue: '#ECF5FF',
      fill_ocean: '#ECFFFA',
      fill_purple: '#EFECFF',
      fill_info: '#F4F4F5',
    },
    fontFamily: {
      Inter: ['Inter'],
      Manrope: ['Manrope'],
      Roboto: ['Roboto'],
      Noto: ['Noto Sans SC'],
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    iconsPlugin({
      collections: getIconCollections(['mdi']),
    }),
  ],
} as Config
