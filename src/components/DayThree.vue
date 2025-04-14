<template>
    <div class="container">
        <!-- Title -->
        <h1 class="title">My Favorite Technologies</h1>
        
        <!-- Looping through the technologies array using v-for -->
        <ul class="tech-list">
            <li v-for="(tech, index) in technologies" :key="index" class="tech-item">
                <!-- Displaying each technology -->
                {{ tech }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "DayThree",
    data() {
        return {
            // Array of technologies to loop through
            technologies: ["Vue.js", "React", "Angular", "Svelte", "Node.js","Pradip Bhatt"],
        };
    },
};
</script>

<style scoped>
/* Styling for the container */
.container {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

/* Title styling */
.title {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
}

/* List styling */
.tech-list {
    list-style-type: none;
    padding: 0;
}

/* Individual list item styling */
.tech-item {
    background-color: #f4f4f4;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

/* Hover effect for list items */
.tech-item:hover {
    transform: scale(1.05);
    background-color: #e0e0e0;
}
</style>