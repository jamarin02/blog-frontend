<template>
  <v-app-bar
      dark
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-title class="text-no-wrap">{{ title }}</v-app-bar-title>
    <v-spacer />
    <v-btn :to="{name: 'Home'}" icon>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn :to="{name: 'Login'}" v-if="!getIsLoggedIn" icon>
      <v-icon>mdi-login</v-icon>
    </v-btn>
    <v-btn :to="{name: 'AdminHome'}" v-else icon>
      <v-icon>mdi-tools</v-icon>
    </v-btn>
    <v-btn @click="logout" v-if="getIsLoggedIn" icon>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TheHeader",
  props: {
    title: String
  },
  computed: {
    ...mapGetters('user', {
      getIsLoggedIn: "getIsLoggedIn"
    })
  },
  methods: {
    ...mapActions('user', {
      setLogout: 'logout'
    }),
    logout: async function () {
      await this.setLogout()
      await this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style scoped>

</style>