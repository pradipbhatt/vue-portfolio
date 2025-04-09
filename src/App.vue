<template>
  <div id="app">
    <AppNavbar />
    <Home />
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
import Home from "@/views/Home.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    Home
  }
};
</script>
