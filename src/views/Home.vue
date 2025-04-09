<template>
  <div>
    <Hero />
    <About />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/ContactSection.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
    About,
    Projects,
    Contact
  }
};
</script>