import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'
import eo from './locales/eo.json'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

const messages = {
  es,
  en,
  eo,
}

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages,
})

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
