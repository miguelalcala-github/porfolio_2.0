<template>
    <header class="grid__col--12 grid">
        <nav class="navbar grid__col--12 grid" role="navigation">
          <span id="toggle" class="grid__col--12 icn--nav-toggle is-displayed-mobile" @click="toggle()">
            <b class="srt">Toggle</b>
          </span>
          <ul class="grid__col--12 grid__col--sm--3 nav " :class="collapsed ? 'is-collapsed-mobile' : ''">
            <li class="nav__item--current">
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link to="/about">Learn More</nuxt-link>
            </li>
          </ul>
          <p class="grid__col--12 grid__col--sm--6 headline-primary" :class="collapsed ? '' : 'is-collapsed-mobile' ">{{titleByPage()}}</p>
          <ul class="grid__col--12 grid__col--sm--3 nav" :class="collapsed ? 'is-collapsed-mobile' : ''">
            <li class="nav__item">
              <nuxt-link to="#">Posts</nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link to="#">Sign in</nuxt-link>
            </li>
          </ul>
        </nav>
      </header>
</template>

<script>
export default {
    data(){
        return {
            collapsed: true,
        }
    },
    methods: {
        toggle() {
            this.collapsed= !this.collapsed;
        },
      titleByPage() {
        if (this.$route.path === '/') {
          return 'May the code be with you'
        } else {
          return 'My portfolio'
        }
      }
    }
}
</script>