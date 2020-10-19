<template>
  <div class="grid">
    <div class="grid__col--6 grid__col--sm--4">
      <div class="panel--centered">
        <h1>Log In</h1>
        <Form
          :cancel="cancel"
          :errors="errors"
          :submit="submit"
          submitButtonText="Sign In"
        >
          <template v-slot:elements>
            <label class="form__label--hidden">Email Address</label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="text"
              v-model="credentials.emailAddress"
              placeholder="Email Address"
              class="form__input"
            />
            <label class="form__label--hidden">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              v-model="credentials.password"
              placeholder="Password"
              class="form__input"
            />
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
      credentials:{
        emailAddress: "",
        password: "",
      },
      errors: [],
    };
  },
  methods: {
    cancel() {
        this.clearForm();
    },
    submit() {
        this.$login(this.credentials)
        .then((user) => {
          this.$router.push("/post")
        })
        .catch((error) => {
          if (error.status) {
            this.clearForm();
            this.errors = [error.message]
          } else {

            console.error(error.message);
          }
        });
    },
    clearForm() {
      this.credentials.emailAddress="";
      this.credentials.password="";
    },
  },
};
</script>