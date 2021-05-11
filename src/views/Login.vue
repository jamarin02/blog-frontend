<template>
<div>
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
      const loginUser = await userApi.postLogin(this.email, this.password)
      await this.setLogin({
        id: loginUser.data.id,
        username: loginUser.data.username,
        email: loginUser.data.email,
        authToken: loginUser.data.authToken
      })
      await this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style scoped>

</style>