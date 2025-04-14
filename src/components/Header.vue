<template>
    <header>
      <h1>{{ title }}</h1>
    </header>
  </template>
  
  <script>
  export default {
    props: ['title']
  };
  </script>
  
  <style scoped>
  header {
    background-color: #eee;
    padding: 1rem;
  }
  </style>
  