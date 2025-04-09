<template>
  <section id="about" class="about-section">
    <div class="about-content">
      <h2 class="about-title">About Me</h2>
      <p class="about-description">
        I am a passionate developer with a love for building beautiful UIs using Vue.js. 
        With a strong foundation in frontend development, I enjoy crafting seamless user experiences 
        and bringing ideas to life through code.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
.about-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
}

.about-content {
  max-width: 800px;
}

.about-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e293b; /* Tailwind's slate-800 color */
  margin-bottom: 1rem;
}

.about-description {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #4b5563; /* Tailwind's gray-600 color */
}
</style>
