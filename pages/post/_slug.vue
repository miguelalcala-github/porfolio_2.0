<template>
    <div class="grid--post">
                <div class="grid__col--12 grid__col--sm--12">                    
                    <h4 >{{ formatDate(post.createdAt) }}</h4>
                </div>
                <div class="grid__col--12 grid__col--sm--12">                    
                    <h1 >{{ post.title }}</h1>
                </div>
                <div class="grid__col--12 grid__col--sm--12 panel--post">                    
                    <div v-html="compiledMarkdown(post.body)" ></div>
                </div>
                <div class="grid__col--12 grid__col--sm--12">                    
                     <span v-for="tag of post.tags" :key="tag" class="card__tag">{{ tag }}</span>
                </div>
                    
    </div>
</template>

<script>
import marked from 'marked'
export default {
    async asyncData({$api, params}) {

    const post = await $api.showPost(params.slug)
    return {post}
  },
  methods: {
      formatDate(string) {
          const date = new Date(string)
          return date.toDateString()
      },
        compiledMarkdown(body) {
            return marked(body);
        }
  },
}
</script>