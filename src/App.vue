<template>
  <v-app>
    <v-main>
      <TheHeader title="Blog de Jamarin" />
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import Home from "@/views/Home";

export default {
  name: 'App',

  components: {
    Home,
    TheHeader,
  },

  data: () => ({
    //
  }),
};
</script>
