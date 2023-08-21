<template>
    <div class="head-pages reveal">
        <div v-for="page in pages">
            <a @mouseenter="btnHover" @mouseleave="btnLeave" :href="`${page.route}`" :id="`${page.name}`" class="page-btn"><i :id="`${page.name} icon`" :class="`${page.icon}`"></i></a>
        </div>
        
    </div>

    <Sitemobilehead :page="`${page}`" />
</template>

<style src="../assets/styles/components/header/pages.scss" />

<script lang="ts">

export default {
    props: {
        page: String
    },

    data() {
        const { $getConfig } = useNuxtApp();

        return {
            btnIconCache: {
                home: '',
                projects: '',
                blogs: ''
            },

            pages: $getConfig().pages
        }
    },

    methods: {
        selectBtn(btnName: string) {
            const { $formatText } = useNuxtApp();

            const target = $(`#${btnName}`);

            if (!target) return;

            target.text($formatText(btnName));
        },

        btnHover(event: MouseEvent) {
            const { $formatText } = useNuxtApp();

            const target = event.currentTarget;
            const id: string = target.id;

            if (!this.btnIconCache[id]) {
                this.btnIconCache[id] = target.innerHTML;
            }

            const displayText = $formatText(target.id);
            target.innerHTML = displayText;
        },

        btnLeave(event: MouseEvent) {
            const target = event.currentTarget;
            const id: string = target.id;

            if (this.btnIconCache[id]) {
                target.innerHTML = this.btnIconCache[id];
            }
        }
    },

    mounted() {
        this.selectBtn(this.page);
    }
}

</script>