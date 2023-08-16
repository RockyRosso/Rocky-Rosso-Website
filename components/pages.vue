<template>
    <div class="head-pages reveal">
        <a @mouseenter="btnHover" @mouseleave="btnLeave" href="/" id="home" class="page-btn"><i id="home icon" class="fa-solid fa-house btn-icon"></i></a>
        <a @mouseenter="btnHover" @mouseleave="btnLeave" href="/projects" id="projects" class="page-btn"><i id="projects icon" class="fa-solid fa-screwdriver-wrench btn-icon"></i></a>
        <a @mouseenter="btnHover" @mouseleave="btnLeave" id="blogs (Coming Soon)" class="page-btn"><i id="blogs icon" class="fa-solid fa-file-pen btn-icon"></i></a>
    </div>
</template>

<style src="../assets/styles/components/header/pages.scss" />

<script lang="ts">

export default {
    props: {
        page: String
    },

    data() {
        return {
            btnIconCache: {
                home: '',
                projects: '',
                blogs: ''
            }
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