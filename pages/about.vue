<template>
  <div class="flex flex-wrap justify-around">
    <div class="order-0 w-full sm:w-2/3">
      <div class="w-full order-0 block">
        <img
          :src="info.image"
          :alt="info.altImage"
          class="h-auto w-64 mx-auto rounded-full shadow-xl object-cover"
        />
      </div>
      <div class="mt-6 sm:my-12 sm:px-8 md:px-12 w-full sm:order-1">
        <nuxt-content :document="info" class="content" />
      </div>
    </div>
    <div class="mt-6 sm:my-4 w-full sm:w-1/3 sm:order-2">
      <div class="px-6">
        <h3 class="mx-auto sm:w-6/12 order-2">
          {{ skills.title }}
        </h3>
        <nuxt-content :document="skills" class="content" />
      </div>
      <div class="flex flex-col items-center mt-6 sm:mt-4">
        <h3>{{ contact.title }}</h3>
        <a :href="contact.linkedin" class="btn btn--link" target="_blank"
          >LinkedIn</a
        >
        <a :href="contact.github" class="btn btn--link " target="_blank"
          >GitHub</a
        >
        <a :href="contact.twitter" class="btn btn--link " target="_blank"
          >Twitter</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const info = await $content("about", "info").fetch();
    const skills = await $content("about", "skills").fetch();
    const contact = await $content("about", "contact").fetch();
    return {
      info,
      skills,
      contact
    };
  }
};
</script>
