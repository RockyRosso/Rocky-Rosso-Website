export default defineNuxtPlugin(() => {
    return {
        provide: {
            formatText(string: string) {
                const splitString = string.split('');
                splitString[0] = splitString[0].toUpperCase();

                return splitString.join('');
            }
        }
    }
})