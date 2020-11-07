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
        :key="project.name"
        class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-2 staggered-item"
      >
        <nuxt-link :to="'/projects/' + project.id">
          <img
            :src="project.image"
            class="showcase__img"
            :alt="project.name + ' main'"
          />
          <h5 class="title ">{{ project.name }}</h5>
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
      type: Object,
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
