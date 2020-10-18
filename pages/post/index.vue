<template>
    <div class="grid">
        <div class="grid__col--12 grid">
            <div v-for="post of posts" :key="post._id" class="grid__col--sm--6 grid__col--md--4 grid__col--lg--3" >
                <div class="card">                    
                    <h3 class="card__title">{{ post.title }}</h3>
                    <div v-html="compiledMarkdown(post.body)" class="card__description"></div>
                    <span v-for="tag of post.tags" :key="tag" class="card__tag">{{ tag }}</span>
                    <h4 class="card__date">{{ formatDate(post.createdAt) }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import marked from 'marked'
export default {
    async asyncData({$api}) {

    const posts = await $api.show()
    return {posts}
  },
  methods: {
    formatDate(string) {
        const date = new Date(string)
        return date.toDateString()
    },
    compiledMarkdown(body) {
        return marked(body,  { sanitize: true });
    }
  },
}
</script>