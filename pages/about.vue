<template>
  <div class="about-container">
    <div class="info-container">
        <nuxt-content :document="info"/>
    </div>  
    <div class="sidebar-list">
        <h3>{{ skills.title }}</h3>
        <nuxt-content :document="skills" />
    </div>
    <div class="image-container">
      <img :src="info.logo" alt="info.alt" />
    </div>
    <div class="contact-container">
        <h3>{{ contact.title }}</h3>
        <a :href="contact.linkedin" class="button--grey" target="_blank">LinkedIn</a>
        <a :href="contact.github" class="button--grey" target="_blank">GitHub</a>
        <a :href="contact.twitter" class="button--grey" target="_blank">Twitter</a>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({ $content, params}) {
      const info = await $content('about', 'info').fetch()
      const skills = await $content('about', 'skills').fetch()
      const contact = await $content('about', 'contact').fetch()
        return { 
            info,
            skills,
            contact 
            }

    }
}
</script>

<style >
</style>