<template>
    <Title>Home</Title>

    <header>
        <Sitehead />
        <Pages page="home" />
    </header>
    
    <main class="wrapper">
        <div style="margin-bottom: 200px;"></div>

        <h1 class="title reveal">Welcome...</h1>

        <div style="margin-bottom: 300px;"></div>

        <h1 class="title scroll-rev">I'm RockyRosso</h1>

        <div style="margin-bottom: 300px;"></div>

        <div class="about-section scroll-rev">
            <h1>I make</h1>

            <div class="about-cards">
                <div class="card">
                    <img class="card-icon" src="../assets/img/icons/discord_icon.png" />
                    <p class="card-txt">Discord Bots</p>
                </div>

                <div class="card">
                    <img class="card-icon" src="../assets/img/icons/websites_icon.png" />
                    <p class="card-txt">Websites</p>
                </div>
            </div>
        </div>

        <div style="margin-bottom: 300px;"></div>

        <div class="about-section scroll-rev">
            <h1>Languages I use</h1>

            <div class="about-cards">
                <div class="card">
                    <img class="card-icon" src="../assets/img/langs/python_icon.png" />
                    <p class="card-txt">Python</p>
                </div>

                <div class="card">
                    <img class="card-icon" src="../assets/img/langs/javascript_icon.png" />
                    <p class="card-txt">Javascript</p>
                </div>

                <div class="card">
                    <img class="card-icon" src="../assets/img/langs/lua_icon.png" />
                    <p class="card-txt">Lua</p>
                </div>

                <div class="card">
                    <img class="card-icon" src="../assets/img/langs/gdscript_icon.png" />
                    <p class="card-txt">GDScript</p>
                </div>
            </div>
        </div>

        <div style="margin-bottom: 300px;"></div>

        <div class="about-section scroll-rev">
            <h1>Tools I use</h1>

            <div class="about-cards">
                <div class="card">
                    <img class="card-icon" src="../assets/img/tools/netlify_icon.png" />
                    <p class="card-txt"><a href="https://www.netlify.com">Netlify</a></p>
                </div>

                <div class="card">
                    <img class="card-icon" src="../assets/img/tools/trello_icon.png" />
                    <p class="card-txt"><a href="https://trello.com/">Trello</a></p>
                </div>

                <div class="card">
                    <img class="card-icon" src="../assets/img/tools/vscode_icon.png" />
                    <p class="card-txt"><a href="https://code.visualstudio.com/">VSCode</a></p>
                </div>

                <div class="card">
                    <img class="card-icon" src="../assets/img/icons/vue_icon.png" />
                    <p class="card-txt"><a href="https://vuejs.org/">Vue</a></p>
                </div>
            </div>
        </div>

        <div style="margin-bottom: 300px;"></div>

        <div class="about-section scroll-rev">
            <h1>My Socials</h1>

            <div class="about-cards">
                <div class="card">
                    <img class="card-icon" src="../assets/img/icons/github_icon.png" />
                    <p class="card-txt"><a href="https://www.github.com/RockyRosso">Github</a></p>
                </div>

                <div class="card">
                    <img class="card-icon" src="../assets/img/icons/twitter_icon.png" />
                    <p class="card-txt"><a href="https://twitter.com/RockyRosso">Twitter</a></p>
                </div>
            </div>
        </div>
    </main>

    <div style="margin-bottom: 300px;"></div>

    <footer>
        <Sitefoot />
    </footer>
</template>

<style src="../assets/styles/components/about-card.scss" />

<script lang="ts">

export default {
    methods: {
        scroll_reveal() {
            const rev_elements = document.querySelectorAll('.scroll-rev');

            for (let i = 0; i < rev_elements.length; i++) {
                const winHeight = window.innerHeight;
                const eleTop = rev_elements[i].getBoundingClientRect().top;

                if (eleTop < winHeight) {
                    rev_elements[i].classList.add('reveal');
                } else {
                    rev_elements[i].classList.remove('reveal');
                }
            }
        }
    },

    mounted() {
        window.addEventListener('scroll', this.scroll_reveal);
    },
}

</script>