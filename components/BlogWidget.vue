<template>
  <nuxt-link :to="link">
    <div class="p-2">
      <h2 class="text-lg text-teal-700">
        {{ $prismic.asText(post.data.blog_post_title) }}
      </h2>
      <p class="text-sm text-gray-500">
        <span>{{ formattedDate }}</span>
      </p>
      <p class="text-md text-gray-700 text-justify">
        {{ getFirstParagraph(post) }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";

export default {
  props: ["post"],
  data: function() {
    return {
      link: "",
      formattedDate: ""
    };
  },
  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph(post) {
      const textLimit = 300;
      const slices = post.data.blog_post_body;
      let firstParagraph = "";
      let haveFirstParagraph = false;

      slices.map(function(slice) {
        if (!haveFirstParagraph && slice.type == "paragraph") {
          firstParagraph += slice.text;
          haveFirstParagraph = true;
        }
      });

      const limitedText = firstParagraph.substr(0, textLimit);

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(" ")) + "...";
      } else {
        return firstParagraph;
      }
    }
  },
  created() {
    console.log(this.post);
    (this.link = LinkResolver(this.post)),
      (this.formattedDate = Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      }).format(new Date(this.post.data.release_date)));
  }
};
</script>
