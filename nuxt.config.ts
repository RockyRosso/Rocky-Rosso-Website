// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['assets/styles/base.scss'],

    ssr: true,

    typescript: {
        strict: false,
        tsConfig: {
            compilerOptions: {
                types: [
                    'jquery'
                ]
            }
        }
    },

    app: {
        head: {
            titleTemplate: '%s | Rocky Rosso',

            meta: [
                { name: 'description', content: 'Check out works done by Rocky Rosso' },
                { name: 'theme-color', content: '#2075cb' },
                { property: 'og:image', content: '/favicon.ico' }
            ],

            link: [
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' },
                { rel: 'stylesheet', href: 'https://vjs.zencdn.net/8.3.0/video-js.css' }
            ],

            script: [
                {
                    src: "https://code.jquery.com/jquery-3.6.4.min.js",
                    type: 'text/javascript'
                },

                {
                    src: 'https://vjs.zencdn.net/8.3.0/video.min.js'
                }
            ]
        }
    },
})
