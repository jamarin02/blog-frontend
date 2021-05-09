<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">HOME</v-col>
      <v-form
        ref="form"
        lazy-validation
      >
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          required
        />
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required
        />
        <v-btn
          color="success"
          @click="login"
        />
      </v-form>
      <v-col cols="12">
        <div v-for="post in posts" :key="post.id">
          {{ post.title }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions} from "vuex";

const userApi = require('../services/user.api')
const postApi = require('../services/post.api')

export default {
  name: "Home",
  data: function () {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 4) || 'Password must be greater than 10 characters',
      ],
      posts: []
    }
  },
  async created() {
    const response = await postApi.getPosts()
    this.posts = response.data.data
  },
  methods: {
    ...mapActions('user', {
      setLogin: 'login'
    }),
    login: async function () {
      if(!this.$refs.form.validate())
        return
      const loginUser = await userApi.postLogin(this.email, this.password)
      await this.setLogin({
        id: loginUser.data.id,
        username: loginUser.data.username,
        email: loginUser.data.email,
        authToken: loginUser.data.authToken
      })
    }
  }
}
</script>

<style scoped>

</style>