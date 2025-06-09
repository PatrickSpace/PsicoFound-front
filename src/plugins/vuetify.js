// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
const vuetify = createVuetify({
  components,
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: true,
    },
  },
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
});

export default vuetify;
