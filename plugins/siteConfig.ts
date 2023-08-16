export default defineNuxtPlugin(() => {
    return {
        provide: {
            getConfig() {
                return {
                    apiBase: 'https://api.rocky-rosso.xyz'
                }
            }
        }
    }
})