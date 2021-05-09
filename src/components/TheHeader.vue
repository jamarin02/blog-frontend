<template>
  <v-app-bar
      dark
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-title class="text-no-wrap">{{ title }}</v-app-bar-title>
    <v-spacer />
    <div v-if="getUsername !== ''">
      {{ getUsername }}
    </div>
    <v-spacer v-if="getUsername !== ''" />
    <v-btn icon>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-login</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TheHeader",
  props: {
    title: String
  },
  computed: {
    ...mapGetters('user', [
        'getUsername'
    ])
  }
}
</script>

<style scoped>

</style>