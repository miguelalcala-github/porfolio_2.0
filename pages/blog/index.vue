<template>
  <section class="max-w-full sm:px-40 md:px-48 lg:px-56 xl:px-64">
    <article>
      <div
        class="w-full h-24 bg-cover bg-center"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <!-- Template for page description -->
      <p class="mt-2 text-lg text-gray-600">
        {{ $prismic.asText(homepageContent.blog_description) }}
      </p>
      <div class="mt-6 flex justify-center flex-wrap">
        <div v-if="$fetchState.pending" class="mt-6">
          <p
            class="text-xl sm:text-2xl text-center text-teal-400 animate-pulse"
          >
            Loading posts...
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
        <CardPost v-else :posts="posts" />
      </div>
    </article>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  head() {
    return {
      title: "Miguel Alcala Blog"
    };
  },
  data() {
    return {
      homepageContent: {},
      posts: {},
      image: ""
    };
  },
  async fetch() {
    try {
      // Query to get blog home content
      const homepageContent = (await this.$prismic.api.getSingle("blog_home"))
        .data;

      // Query to get posts content to preview
      const blogPosts = await this.$prismic.api.query(
        this.$prismic.predicates.at("document.type", "blog_post"),
        { orderings: "[my.post.date desc]" }
      );

      // Returns data to be used in template
      this.homepageContent = homepageContent;
      this.posts = blogPosts.results;
      this.image = homepageContent.head_background.url;
      return null;
    } catch (e) {
      // Returns error page

      this.error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
