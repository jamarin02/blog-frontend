<template>
<div>
  <p v-if="error">There is no account with this email or password</p>
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
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        v-model="password"
        :rules="passwordRules"
        label="Password"
        required
        @click:append="showPassword = !showPassword"
    />
    <v-btn
        color="success"
        @click="login"
    >Access</v-btn>
  </v-form>
</div>
</template>

<script>
import {mapActions} from "vuex"
const userApi = require('../services/user.api')

export default {
  name: "Login",
  data: function () {
    return {
      error: false,
      showPassword: false,
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
      ]
    }
  },
  methods: {
    ...mapActions('user', {
      setLogin: 'login'
    }),
    login: async function () {
      if(!this.$refs.form.validate())
        return
      try {
        const loginUser = await userApi.postLogin(this.email, this.password)
        await this.setLogin({
          id: loginUser.data.id,
          username: loginUser.data.username,
          email: loginUser.data.email,
          authToken: loginUser.data.authToken
        })
        await this.$router.push({name: 'Home'})
      } catch (error) {
        console.error(error)
        this.error = true
      }
    }
  }
}
</script>

<style scoped>
  p {
    background-color: red;
    color: white;
    font-size: 1em;
    text-align: center;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  }
</style>