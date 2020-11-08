<template>
  <transition
    :css="false"
    @before-enter="beforeEnterEl"
    @enter="enterEl"
    appear
  >
    <ul class="flex justify-around flex-wrap">
      <li
        v-for="project of projects"
        :key="project.slug"
        class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-2 staggered-item"
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
  </transition>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  methods: {
    beforeEnterEl: function(el) {
      gsap.set(el.children, {
        scale: 0.5,
        opacity: 0
      });
    },
    enterEl: function(el, done) {
      gsap.to(el.children, {
        duration: 1.5,
        scale: 1,
        opacity: 1,
        ease: "back",
        stagger: 0.5
      });
    }
  }
};
</script>
