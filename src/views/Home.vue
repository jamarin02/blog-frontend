<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">HOME</v-col>

      <v-col cols="12">
        <div v-for="post in posts" :key="post.id">
          {{ post.title }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const postApi = require('../services/post.api')

export default {
  name: "Home",
  data: function () {
    return {
      posts: []
    }
  },
  async created() {
    const response = await postApi.getPosts()
    this.posts = response.data.data
  }
}
</script>

<style scoped>

</style>