export default defineNuxtPlugin(() => {
    return {
        provide: {
            getConfig() {
                return {
                    apiBase: 'https://api.rocky-rosso.xyz',

                    pages: [
                        {
                            name: 'home',
                            route: '/',
                            icon: 'fa-solid fa-house btn-icon'
                        },

                        {
                            name: 'projects',
                            route: '/projects',
                            icon: 'fa-solid fa-screwdriver-wrench btn-icon'
                        }
                    ]
                }
            }
        }
    }
})