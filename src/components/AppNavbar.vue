<template>
    <nav class="navbar">
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "AppNavbar"
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    padding: 1rem;
  }
  .navbar ul {
    display: flex;
    gap: 1rem;
    list-style: none;
  }
  .navbar a {
    color: white;
    text-decoration: none;
  }
  </style>
  