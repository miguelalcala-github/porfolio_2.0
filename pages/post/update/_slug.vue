<template>
  <div class="grid">
    <div class="grid__col--12 grid__col--sm--12">
      <div class="panel--centered">
        <h1>Update Post</h1>
        <Form
          :cancel="cancel"
          :errors="errors"
          :submit="submit"
          submitButtonText="Update post"
        >
          <template v-slot:elements>
            <label class="form__label--hidden">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              v-model="post.title"
              placeholder="Title..."
              class="form__input--post"
            />
            <label class="form__label--hidden">Post</label>
            <textarea
              id="post"
              name="post"
              v-model="post.body"
              placeholder="Write your post..."
              class="form__textarea--body"
            >
            </textarea>
            <label class="form__label--hidden">Tags</label>
            <textarea
              id="tags"
              name="tags"
              v-model="tags"
              placeholder="Tags..."
              class="form__textarea--tag"
            >
            </textarea>
          </template>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
    import marked from 'marked'
export default {
    async fetch() {

    const post = await this.$api.showPost(this.$route.params.slug)
    this.post = Object.assign(post)
    this.tags = this.post.tags ?  this.convertTags(this.post.tags) : ""
    return null
  },
  data() {
    return {
        post: {
            title: "",
            body: "",
            tags: [],
        },
        tags: "",
        credentials: {
            emailAddress: this.$store.state.authenticatedUser.emailAddress,
            password: this.$store.state.authenticatedUser.password
        },
        tags: "",
      errors: [],
    };
  },
  middleware: 'authenticated',
  methods: {
    formatDate(string) {
        const date = new Date(string)
        return date.toDateString()
    },
    compiledMarkdown(body) {
        return marked(body);
    },
    cancel() {
        this.$router.push('/post');
    },
    submit() {
        this.post.tags = this.convertTags(this.tags)

        this.$api.updatePost(this.post, this.post._id, this.credentials)
            .then((reponse) => {
                this.$router.push(`/post/${this.post._id}`)
            })
            .catch((error) => {
                if (error.status) {
                    this.clearForm();
                    this.errors = [...error.errors]
                } else {
                    this.$router.push(error.message)
                }
            });
    },
    clearForm() {
      this.credentials.emailAddress="";
      this.credentials.password="";
    },
    convertTags(tags){ 
        if(typeof tags === "string") {
            return tags.split(', ');
        } else if(Array.isArray(tags)) {
            return tags.join(', ')
        }
    }
  },
};
</script>