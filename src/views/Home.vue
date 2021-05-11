<template>
  <v-container fluid>
    <v-row dense>
      <v-col
          v-for="post in posts"
          :key="post.id"
          :cols="4"
      >
        <v-card>
          <v-img
              :src="`https://picsum.photos/500/200/?blur=1&random=${post.id}`"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
          >
            <v-card-title v-text="post.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
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