<template>
    <div class="grid">
        <div class="grid__col--12 grid__col--sm--12">
            <nuxt-link v-if="auth" class="btn--link" to="/post/new">New Post</nuxt-link>
        </div>
        <div class="grid__col--12 grid__col--sm--12 grid">
            <div v-if="$fetchState.pending" class="grid__col--12 grid__col--sm--12">
                <h3>Loading posts...</h3>
            </div>
            <div v-else-if="$fetchState.error" class="grid__col--12 grid__col--sm--12 grid">
                <h3 class="grid__col--12 grid__col--sm--12">Oh no! An error ocurred fetching posts, try to refresh in a moment</h3>
                <div class="grid__col--12 grid__col--sm--12">   
                    <button class="btn--info" @click="$fetch">Refresh</button>
                </div>
            </div>
            <div v-else v-for="post of posts" :key="post._id" class="grid__col--12 grid__col--sm--6 grid__col--md--4 grid__col--lg--3" >
                <div class="card" >                      
                    <div class="card__header" v-if="auth">
                        <button @click="goTo(`update/${post._id}`)">&#9998;</button>
                        <button @click="deletePost(post._id)">X</button>
                    </div>                 
                    <div @click="goTo(post._id)" class="card__body">
                    <h3 class="card__title">{{ post.title }}</h3>
                    <div v-html="compiledMarkdown(post.body)" class="card__description"></div>
                    <div v-if="post.tags.length > 0" class="card__tag-container">
                        <span v-for="(tag, index) of post.tags" :key="index" class="card__tag">{{ tag }}</span>
                    </div>
                    <h4 class="card__date">{{ formatDate(post.createdAt) }}</h4>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import marked from 'marked'
export default {
    async fetch() {

    const posts = await this.$api.show()
    this.posts = [...posts]
    return null
  },
    data() {
    return {
        posts: [],
        credentials: {
            emailAddress: '',
            password: ''
        },
    };
  },
  methods: {
    formatDate(string) {
        const date = new Date(string)
        return date.toDateString()
    },
    compiledMarkdown(body) {
        return marked(body);
    },
    goTo(post) {
        this.$router.push(`/post/${post}`);
    },
    deletePost(id) {
        this.$toast.show('Are your sure you want to delete this post?',     
        {
            position: 'top-center',
            className: 'toast--warning',
            theme: 'otuline',
            action : [
                {
                    text : 'Confirm',
                    // send delete request - delete post by filtering
                    onClick : (e, toastObject) => {
                        this.$api.deletePost(id, this.credentials)
                            .then( response => {
                                this.posts = [...this.posts.filter( post => {
                                    return post._id !== id
                                })]
                            })
                        toastObject.goAway(0);
                    }
                },
                {
                    text : 'Cancel',
                    onClick : (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                }
            ]
    })
    }
  },
      computed: {
      auth() {
        const user = this.$store.state.authenticatedUser
        if (user) {
            this.credentials.emailAddress = user.emailAddress
            this.credentials.password = user.password
            return user
        }
        return false
      }
    }
}
</script>