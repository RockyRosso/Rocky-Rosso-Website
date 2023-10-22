<template>
    <Title>Projects</Title>

    <header>
        <Sitehead />
        <Pages page="projects" />
    </header>

    <main class="wrapper">
        <div style="margin-bottom: 100px;"></div>
        <div class="projects">
            <div id="loading">
                <h1>Loading Projects...</h1>
                <p>
                    This could take a minute due to
                    <a
                        target="_blank"
                        href="https://en.wikipedia.org/wiki/Cold_start_(computing)"
                        >cold starts</a
                    >
                </p>
                <p>
                    If it takes more than a 1 minute, the API may be down
                </p>
            </div>
        </div>

        <h1>
            Check out my
            <a target="_blank" href="https://github.com/RockyRosso">Github</a>
            for more projects
        </h1>
    </main>

    <footer>
        <Sitefoot />
    </footer>
</template>

<style src="../assets/styles/pages/projects.scss" />

<script lang="ts">

import { ProjectsData } from "../assets/types/apiRes";

export default {
    data() {
        return {
            videos: [],
        };
    },

    methods: {
        async fetchProjects() {
            const { $getConfig } = useNuxtApp();
            const { apiBase } = $getConfig();

            const res = await fetch(`${apiBase}/projects`, {
                method: "GET",
                cache: "default",
                mode: "cors",

                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data: Array<ProjectsData> = await res.json();

            for (let i = 0; i < data.length; i++) {
                const projectComp = $(
                    `<div id="${data[i]._id}" class="project">
                    </div>`,
                );

                projectComp.prependTo(".projects");

                const videos = data[i].videos;

                for (let v = 0; v < videos.length; v++) {
                    const projectVideos = $(
                        `<video
                            controls
                            data-setup="{  }"
                            id="vid-player-${data[i]._id}${v}"

                        >
                            <source src="${videos[v]}" type="video/mp4" />
                        </video>`,
                    );

                    projectVideos.prependTo(`#${data[i]._id}`);

                }
                
                const projectInfo = $(
                    `<h1>${data[i].name}</h1>
                    <p>${data[i].info}</p>`,
                );

                projectInfo.prependTo(`#${data[i]._id}`);
            }
        },
    },

    async mounted() {
        await this.fetchProjects();

        const loadingEle = $("#loading");
        loadingEle.hide();
        loadingEle.css('position', 'absolute');
    },
};
</script>
