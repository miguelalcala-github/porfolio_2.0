<template>
    <div class="grid">
      <p class="grid__col--12 headline-secondary--grouped">{{ projects.description }}</p>
      <div class="grid__col--12 grid">
        <div v-for="project of projects.projects" :key="project.name" class="grid__col--sm--6 grid__col--md--4 grid__col--lg--3 showcase" >
          <nuxt-link :to="'/projects/' + project.id">
            <img  :src="project.image" class="showcase__img" :alt="project.name + ' main'">
            <h5 class="showcase__img--title">{{ project.name }}</h5>
          </nuxt-link>
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
