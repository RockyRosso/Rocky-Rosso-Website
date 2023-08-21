<template>
    <div class="mobile-head">
        <div class="mb-btn-container">
            <button class="mb-btn"><i class="fa-solid fa-bars"></i></button>
        </div>
    </div>

    <div class="mb-content">
        <div class="mb-pages">
            <div v-for="page in pages">
                <a :href="`${page.route}`" :id="`${page.name}-mb`" class="mb-page-btn"><i :class="`${page.icon}`"></i> {{ $formatText(page.name) }}</a>
            </div>
        </div>
    </div>
</template>

<style src="../assets/styles/components/header/mobile-header.scss" />

<script lang="ts">

export default {
    props: {
        page: String
    },

    data() {
        const { $getConfig } = useNuxtApp();

        return {
            pages: $getConfig().pages,

            mobileBtn: {
                open: '<i class="fa-solid fa-x"></i>',
                close: '<i class="fa-solid fa-bars"></i>'
            }
        }
    },

    methods: {
        selectBtn(btnName: string) {
            const target = $(`#${btnName}-mb`);
            
            if (!target) return;
            console.log(target);
  
            target.addClass('mb-select')
        },

        mbButtonListener() {
            const btn = $('.mb-btn');
            const mbContent = $('.mb-content');

            btn.on('click', () => {
                if (mbContent.css('visibility') === 'hidden') {
                    mbContent.css('visibility', 'visible');
                    btn.html(this.mobileBtn.open)

                    return;
                }

                btn.html(this.mobileBtn.close)
                mbContent.css('visibility', 'hidden');
            })
        }
    },

    mounted() {
        this.selectBtn(this.page);
        this.mbButtonListener();
    },
}

</script>