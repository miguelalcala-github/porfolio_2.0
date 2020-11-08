<template>
  <div class="grid">
    <div class="grid__col--12 grid">
      <div
        class="grid__col--12 grid__col--sm--10 grid__col--md--9 grid__col--lg--8"
      >
        <h1 class="headline-primary--cap">{{ project.title }}</h1>
        <nuxt-content :document="project" class="panel--centered" />
      </div>
      <div
        class="grid__col--12 grid__col--sm--2 grid__col--md--3 grid__col--lg--4 grid--sidelist"
      >
        <h3 class="grid__col--12 grid__col--sm--12">TECHNOLOGIES</h3>
        <ul
          v-for="tech of project.technologies"
          :key="tech"
          class="grid__col--12 grid__col--sm--12"
        >
          <li>{{ tech }}</li>
        </ul>
        <div class="grid__col--12 grid__col--sm--12">
          <a
            v-show="project.live"
            :href="project.live"
            class="btn--link"
            target="_blank"
            >Live Demo</a
          >
        </div>
        <div class="grid__col--12 grid__col--sm--12">
          <a :href="project.repository" class="btn--link" target="_blank"
            >GitHub Repository</a
          >
        </div>
      </div>
    </div>
    <div class="grid__col--12">
      <img
        v-show="project.gif"
        :src="project.gif"
        :alt="project.title + ' gif'"
        class="img--landscape"
      />
      <img
        v-for="(image, index) of images"
        :key="index"
        :src="image"
        class="img--landscape"
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
