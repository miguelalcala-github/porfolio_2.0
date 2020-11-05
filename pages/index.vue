<template>
  <div class="grid">
    <p class="grid__col--12 headline-secondary--grouped">
      {{ projects.description }}
    </p>
    <div class="grid__col--12 grid home">
      <div v-if="$fetchState.pending" class="grid__col--12 grid__col--sm--12">
        <h3>Loading projects...</h3>
      </div>
      <div
        v-else-if="$fetchState.error"
        class="grid__col--12 grid__col--sm--12 grid"
      >
        <h3 class="grid__col--12 grid__col--sm--12">
          Oh no! An error ocurred fetching posts, try to refresh in a moment
        </h3>
        <div class="grid__col--12 grid__col--sm--12">
          <button class="btn--info" @click="$fetch">Refresh</button>
        </div>
      </div>
      <div
        v-else
        v-for="project of projects.projects"
        :key="project.name"
        class="grid__col--sm--6 grid__col--md--4 grid__col--lg--3 showcase"
      >
        <nuxt-link :to="'/projects/' + project.id">
          <img
            :src="project.image"
            class="showcase__img"
            :alt="project.name + ' main'"
          />
          <h5 class="showcase__img--title">{{ project.name }}</h5>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: {}
    };
  },
  async fetch() {
    const projects = await this.$content("projects", "projects").fetch();
    this.projects = projects;
    return null;
  }
};
</script>
