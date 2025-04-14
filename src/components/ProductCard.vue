<template>
    <div class="card">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
      <p><strong>${{ price }}</strong></p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['name', 'description', 'price']
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  </style>
  