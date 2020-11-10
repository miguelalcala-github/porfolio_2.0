<template>
  <div>
    <div class="max-w-full sm:px-40 md:px-48 lg:px-56 xl:px-64">
      <!-- Template for page title -->
      <h1>
        {{ $prismic.asText(document.blog_post_title) }}
      </h1>
      <!-- Template for published date -->
      <p class="text-center text-sm text-gray-500">
        <span>{{ formattedDate }}</span>
      </p>
      <div class="content">
        <!-- Slice Block Componenet tag -->
        <SlicesBlock :slices="slices" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const post = (await $prismic.api.getByUID("blog_post", params.uid)).data;
      // Returns data to be used in template
      return {
        document: post,
        slices: post.blog_post_body,
        formattedDate: Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "2-digit"
        }).format(new Date(post.release_date))
      };
    } catch (e) {
      console.log("error", e);
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
