<template>
  <section id="hero" class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">Hello, I'm Pradip</h1>
      <p class="hero-subtitle">Frontend Developer | Vue Enthusiast</p>
      <a href="#projects" class="hero-button">View My Work</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainHero",
};
</script>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #3e5272, #0f172a);
  color: white;
  text-align: center;
  padding: 2rem;
}

.hero-content {
  max-width: 800px;
}

.hero-title {                    
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #f1e2ff; /* Tailwind's sky-400 color */
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #94a3b8; /* Tailwind's slate-400 color */
}

.hero-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #0e4600;
  /* Tailwind's blue-600 color */
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.hero-button:hover {
  background-color: #1d4ed8; /* Tailwind's blue-700 color */
  transform: scale(1.05);
}
</style>
