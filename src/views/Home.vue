<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">HOME</v-col>
      {{ user.username }}
    </v-row>
  </v-container>
</template>

<script>
const userApi = require('../services/user.api')

export default {
  name: "Home",
  data: function () {
    return {
      user: null
    }
  },
  async created() {
    let response = await userApi.getUser(2)
    this.user = response.data.data
  }
}
</script>

<style scoped>

</style>