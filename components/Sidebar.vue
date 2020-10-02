<template>
    <div class="collapsed">
        <div id="sidebar" class="sidebar" ref="sidebar">
            <button class="button--close" @click="closeNav()">&times;</button>
            <img class="thumbnail" src="https://res.cloudinary.com/da3z5stec/image/upload/v1601479844/portflio-nuxt/profile_iwp5ff.png" alt="profile picture">
            <h3>Miguel Angel Alcala Romero</h3>
            <p>Hello! I'm a Telecomunication Engineer with a strong curiousity and hunger to learn everything that falls in my hands. 
    Destiny (or lifecicle) took me to the Full Stack Development Techdegree from Treehouse after a beggining path of autodidact learning and waking up that organized mind of mine to code searching the best, cleanest and smartest way (even being the hardest) to resolve any problem that can be solved with some coding.</p>
            <nuxt-link v-if="isHome" class="button--white" to="/about">Learn More</nuxt-link>
            <nuxt-link v-else class="button--white" to="/">Home</nuxt-link>
        </div>
        <div id="main" class="main">
            <button class="button--nav" @click="openNav()">&#9776;</button>
            <nuxt-link v-if="isHome" class="button--nav" to="/about">&#9742;</nuxt-link>
            <nuxt-link v-else class="button--nav" to="/">&#8962;</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isHome() {
            return this.$nuxt.$route.path === '/'
        },
    },
    methods: {
        /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
        openNav() {
            this.$refs.sidebar.classList.add("visible")
        },
        closeNav() {
            this.$refs.sidebar.classList.remove("visible")
        }
    }

}
</script>

<style scoped>
.sidebar{
    min-width: 300px;
    max-width: 300px;
    padding: 40px 20px 30px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    background: teal;
    left: 0px;
    position: fixed; 
    z-index: 1;
    height: 100%;
    overflow-x: hidden; 
    overflow-y: hidden; 
    visibility: hidden;
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
}
.collapsed {
    max-width: 70px;
    min-width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.visible {
    visibility: visible;
}
.main {
  visibility: visible;
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 5px 10px;
}  
h3 {
    font-family: bold;
    letter-spacing: 2.5px;
    -webkit-text-transform: uppercase;
    text-transform: uppercase;
    color: white;

    margin-bottom: 1.5rem;
}
p {
    color: white;
    text-align: justify;
    margin-bottom: 2rem;
}
</style>