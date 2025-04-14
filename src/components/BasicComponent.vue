<template>
    <div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['title', 'description']
  };
  </script>
  
  <style scoped>
  h2 {
    color: blue;
  }
  </style>
  