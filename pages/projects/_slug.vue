<template>
    <div class="index-container">
        <div class="nav project-info">
            <div class="project-info-container">
                <h1>{{ head.title }}</h1>
                <nuxt-content :document="project" />
            </div>
            <div class="sidebar-list">
                <h3>TECHNOLOGIES</h3>
                <ul v-for="tech of head.technologies" :key="tech">
                    <li>{{ tech }}</li>
                </ul>
                <a v-show="head.live" :href="head.live" class="button--grey" target="_blank">Live Demo</a>
                <a :href="head.repository" class="button--grey" target="_blank">GitHub Repository</a>
            </div>
        </div>
        <div class="project-images">
            <img v-show="project.gif" :src="project.gif" :alt="head.title + ' gif'" class="gif">
            <img v-for="(image,index) of images" :key="index" :src="image" class="thumbnail" :alt="head.title + index" />
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const project = await $content('projects', params.slug).fetch()
        return { images: project.images, head: project.head, project }
    }
}
</script>

<style>

</style>