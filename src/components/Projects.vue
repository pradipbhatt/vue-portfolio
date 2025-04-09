<template>
  <section id="projects" class="projects-section">
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <img :src="project.image" alt="Project Image" class="project-image" />
        <div class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <ul class="project-skills">
            <li v-for="skill in project.skills" :key="skill" class="skill">
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectList",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Notes App",
          description: "A simple notes app built with Vue and Firebase for real-time data storage.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkmE30ebBCSja4JIXqifg6RtGZVS4PIctVA&s",
          skills: ["Vue", "Firebase", "CSS"],
        },
        {
          id: 2,
          title: "Weather App",
          description: "A weather app that fetches real-time weather data using the OpenWeatherMap API.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqRAmyGUJ-NzUwJwpGq9YEiASH5Xssr0rTQ&s",
          skills: ["JavaScript", "API Integration", "CSS"],
        },
        {
          id: 3,
          title: "Portfolio Website",
          description: "A personal portfolio website to showcase projects and skills.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmPIsCjOY5XF2vAfwJBu7qn3Edu70yfrdhA&s",
          skills: ["HTML", "CSS", "Vue"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects-section {
padding: 70px 0px;
  background-color: #f9f9f9;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
}

.project-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 300px;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-content {
  padding: 15px;
}

.project-title {
  font-size: 1.5rem;
  color: #485720;
  margin-bottom: 10px;
}

.project-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
}

.project-skills {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill {
  background-color: #485720;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.875rem;
}
</style>
