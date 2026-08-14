/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com
 */

import '@fortawesome/fontawesome-free/css/all.css';
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { aliases, fa } from 'vuetify/iconsets/fa';

export default createVuetify({
  theme: {
    defaultTheme: 'system',
    themes: {
      light: {
        colors: {
          background: '#0E1113',
          surface: '#0E1113',
          primary: '#D93900',
          teste: '#B7CAD4',
        },
      },

      dark: {
        colors: {
          background: '#0E1113',
          surface: '#0E1113',
          primary: '#D93900',
          textGrey: '#B7CAD4',
        },
      },
    },
  },
  display: {
    mobileBreakpoint: 'md',
    thresholds: {
      xs: 0,
      sm: 600,
      md: 840,
      lg: 1145,
      xl: 1545,
      xxl: 2138,
    },
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
});
