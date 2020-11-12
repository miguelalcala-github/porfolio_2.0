<template>
  <ul class="flex justify-around flex-wrap">
    <li
      v-for="project of projects"
      :key="project.slug"
      class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-2 staggered-item opacity-0"
    >
      <nuxt-link :to="{ path: project.path, params: { slug: project.slug } }">
        <img
          :src="project.showcase"
          class="showcase__img"
          :alt="project.title + ' main'"
        />
        <h5 class="title ">{{ project.title }}</h5>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
};
</script>
