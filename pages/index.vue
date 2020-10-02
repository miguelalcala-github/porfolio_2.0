<template>
    <div class="container-index">
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
.links {
  padding-top: 15px;
}
.projects-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
}
.project-container {
  max-width: 30%;
  margin-bottom: 20px;
}
.project-container .thumbnail {
  margin-bottom: 10px;
  box-shadow: 0px 0px 10px 5px lightseagreen;
}
.project-container h5 {
  text-transform: uppercase;
}
</style>
