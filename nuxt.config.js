// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiLoginEndpoint: process.env.API_LOGIN_ENDPOINT,
      apiTagmarshallLoginEndpoint: process.env.API_TAGMARSHALL_LOGIN_ENDPOINT,
    },
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'href:https://fonts.googleapis.com/css2?family=Newsreader:wght@400;700&family=Inter:wght@400;700&display=swap',
      },
    ],
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
