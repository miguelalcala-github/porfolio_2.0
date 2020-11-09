<template>
  <div class="max-w-full lg:px-56 xl:px-64">
    <p
      class="px-8 mx-auto max-w-full sm:max-w-3xl text-xl sm:text-2xl text-gray-600 leading-tight text-justify"
    >
      {{ intro }}
    </p>
    <div class="mt-6 flex justify-center flex-wrap">
      <div v-if="$fetchState.pending" class="mt-6">
        <p class="text-xl sm:text-2xl text-center text-teal-400 animate-pulse">
          Loading projects...
        </p>
      </div>
      <div
        v-else-if="$fetchState.error"
        class="w-full sm:max-w-md flex justify-center flex-wrap"
      >
        <h3 class="mt-6 text-xl sm:text-2xl text-center text-red-600">
          Oh no! An error ocurred fetching posts, try to refresh in a moment
        </h3>
        <a class="btn btn--info" @click="$fetch">
          Refresh
        </a>
      </div>
      <Showcase v-else :projects="projects" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      projects: {},
      intro: ""
    };
  },
  async fetch() {
    const contentIntro = await this.$content("about", "info")
      .only(["intro"])
      .fetch();
    this.intro = contentIntro.intro;
    const projects = await this.$content("projects")
      .sortBy("createdAt", "asc")
      .fetch();
    this.projects = projects;
    return null;
  }
};
</script>
