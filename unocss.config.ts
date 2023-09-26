import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetIkymat from '@ikymat/unocss-preset'

// Icon loader
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

// BREAKPOINTS
// import { BREAKPOINTS_PX } from './libs/App/constants/breakpoints.constant'

export default defineConfig({
  theme: {
    colors: {
      primary: '#0C4076',
      secondary: '#ED1B2D',
      tertiary: '#FFDF1B',
      darker: '#121212',
      positive: '#95CD41',
      negative: '#FC4F4F',
      warning: '#FB923C',
      info: '#60A5FA',
    },
    boxShadow: {
      consistent: '0px 0px 12px 8px rgba(0, 0, 0, 0.05)',
    },
    // breakpoints: BREAKPOINTS_PX,
    font: {
      size: {
        '2xs': '0.625rem',
        'xs': '0.75rem',
        'sm': '0.875rem',
        'md': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
      weight: {
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetIkymat(),
    presetIcons({
      scale: 1.2,
      prefix: '',
      collections: {
        custom: FileSystemIconLoader('./assets/icons', svg => {
          return svg.replace(/[\r\n]/gm, '')
        }),
      },
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: {
          name: 'Montserrat',
          weights: ['400', '500', '600', '700'],
        },
        serif: 'DM Serif Display',
        mono: {
          name: 'Ubuntu Mono',
          weights: ['400', '700'],
          italic: true,
        },
      },
    }),
  ],
  safelist: [
    'emojione:flag-for-czechia',
    'emojione:flag-for-serbia',
    'emojione:flag-for-united-kingdom',
  ],
  transformers: [
    transformerDirectives({ applyVariable: '--apply' }),
    transformerVariantGroup(),
  ],
})
