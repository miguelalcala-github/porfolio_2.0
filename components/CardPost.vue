<template>
  <transition
    :css="false"
    @before-enter="beforeEnterEl"
    @enter="enterEl"
    appear
  >
    <!-- Check blog posts exist -->
    <div class="flex justify-around flex-wrap ">
      <!-- Template for blog posts -->
      <section
        v-for="post in posts"
        :key="post.id"
        v-bind:post="post"
        class="w-full p-2 staggered-item shadow-lg rounded-md bg-gray-200 scale-100 hover:shadow-2xl"
      >
        <!-- Here :post="post" passes the data to the component -->
        <BlogWidget :post="post"></BlogWidget>
      </section>
    </div>
  </transition>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: {
    posts: {
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
