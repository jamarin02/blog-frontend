<template>
  <v-app>
    <v-main>
      <TheHeader title="Blog de Jamarin" />
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  name: 'App',

  components: {
    TheHeader,
  },

  data: () => ({
    //
  }),
};
</script>
