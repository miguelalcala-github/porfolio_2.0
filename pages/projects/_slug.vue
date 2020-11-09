<template>
  <div class="flex flex-wrap justify-around max-w-full lg:px-24 xl:px-56">
    <div class="order-0 w-full sm:w-2/3">
      <div class="w-full order-0 block">
        <h1>{{ project.title }}</h1>
        <nuxt-content :document="project" class="content" />
      </div>
    </div>
    <div class="mt-4 sm:mt-2 w-full sm:w-1/3 sm:order-1">
      <div class="px-6">
        <h3>TECHNOLOGIES</h3>
        <ul v-for="tech of project.technologies" :key="tech" class="content">
          <li>{{ tech }}</li>
        </ul>
      </div>
      <div class="flex flex-col items-center">
        <a
          v-show="project.live"
          :href="project.live"
          class="btn btn--link"
          target="_blank"
          >Live Demo</a
        >
        <a :href="project.repository" class="btn btn--link" target="_blank"
          >GitHub Repository</a
        >
      </div>
    </div>
    <div class="order-2 w-full mt-6 sm:mt-4">
      <img
        v-show="project.gif"
        :src="project.gif"
        :alt="project.title + ' gif'"
        class="mt-6 sm:mt-4 shadow-xl mx-auto"
      />
      <img
        v-for="(image, index) of images"
        :key="index"
        :src="image"
        class="mt-6 sm:mt-4 shadow-xl"
        :alt="project.title + index"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content("projects", params.slug).fetch();
    return { images: project.images, project };
  }
};
</script>

<style></style>
