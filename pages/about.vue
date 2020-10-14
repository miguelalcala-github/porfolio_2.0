<template>
    <div class="grid">
      <img :src="info.image" :alt="info.altImage" class="img--avatar grid__col--8 grid__col--sm--6" />
      <div class="grid__col--12 grid__col--sm--10 grid__col--md--9 grid__col--lg--8">
        <nuxt-content :document="info" class="panel"/>
      </div>
      <div class="grid__col--12 grid__col--sm--2 grid__col--md--3 grid__col--lg--4">
        <div class="grid--sidelist">
          <h3 class="grid__col--12 grid__col--sm--12">{{ skills.title }}</h3>
          <nuxt-content :document="skills" class="grid__col--sm--12" />
        </div>
        <div class="grid--sidelist">
          <h3 class="grid__col--12 grid__col--sm--12">{{ contact.title }}</h3>
          <div class="grid__col--12 grid__col--sm--12">
            <a :href="contact.linkedin" class="btn--link" target="_blank">LinkedIn</a> 
          </div>
          <div class="grid__col--12 grid__col--sm--12">
            <a :href="contact.github" class="btn--link" target="_blank">GitHub</a>
          </div>
          <div class="grid__col--12 grid__col--sm--12">
            <a :href="contact.twitter" class="btn--link" target="_blank">Twitter</a>
          </div>
        </div>
      </div>
      <div class="grid__col--12">
        <img :src="info.logo" :alt="info.altLogo" />
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