<template>
    <div class="index-container">
      <div class="nav">
        <h1>{{ projects.title }}</h1>
        <p>{{ projects.description }}</p>
      </div>
      <div class="projects-container">
        <div v-for="project of projects.projects" :key="project.name" class="project-container" >
          <nuxt-link :to="'/projects/' + project.id">
            <img  :src="project.image" class="thumbnail" :alt="project.name + ' main'">
          </nuxt-link>
          <h5>{{ project.name }}</h5>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  async asyncData({$content}) {

    const projects = await $content('projects', 'projects').fetch()
    return {projects}
  }
}
</script>

<style>

</style>
