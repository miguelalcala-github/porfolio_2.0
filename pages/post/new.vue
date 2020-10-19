<template>
  <div class="grid">
    <div class="grid__col--12 grid__col--sm--12">
      <div class="panel--centered">
        <h1>New Post</h1>
        <Form
          :cancel="cancel"
          :errors="errors"
          :submit="submit"
          submitButtonText="Create post"
        >
          <template v-slot:elements>
            <label class="form__label--hidden">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              v-model="post.title"
              placeholder="Title..."
              class="form__input"
            />
            <label class="form__label--hidden">Post</label>
            <textarea
              id="post"
              name="post"
              v-model="post.body"
              placeholder="Write your post..."
              class="form__textarea"
            >
            </textarea>
            <label class="form__label--hidden">Tags</label>
            <textarea
              id="tags"
              name="tags"
              v-model="tags"
              placeholder="Tags..."
              class="form__textarea"
            >
            </textarea>
          </template>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        post: {
            title: "",
            body: "",
            tags: [],
        },
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
    cancel() {
        this.clearForm();
    },
    submit() {
        post.tags = this.convertTags(this.tags)
        this.$api.createPost(this.post, this.credentials)
        .then((location) => {

          this.$router.push(location)
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
    convertTags(tagsString){
        return tagsString.split(', ');
    }
  },
};
</script>