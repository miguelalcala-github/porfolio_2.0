<template>
  <div class="max-w-full">
    <p
      class="px-8 mx-auto max-w-full sm:max-w-3xl text-xl sm:text-2xl text-gray-600 leading-tight text-justify"
    >
      {{ projects.description }}
    </p>
    <div class="mt-6 flex justify-center flex-wrap">
      <div
        v-if="$fetchState.pending"
        class="mt-6 text-xl sm:text-2xl text-center text-teal-400"
      >
        <h3>Loading projects...</h3>
      </div>
      <div
        v-else-if="$fetchState.error"
        class="w-full sm:max-w-md flex justify-center flex-wrap"
      >
        <h3 class="mt-6 text-xl sm:text-2xl text-center text-red-600">
          Oh no! An error ocurred fetching posts, try to refresh in a moment
        </h3>
        <button class="btn btn--info" @click="$fetch">
          Refresh
        </button>
      </div>
      <div
        v-else
        v-for="project of projects.projects"
        :key="project.name"
        class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-2"
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
