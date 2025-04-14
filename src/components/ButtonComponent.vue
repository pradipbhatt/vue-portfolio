<template>
    <button class="btn">
      <slot>Default Button</slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'ButtonComponent',
    props: {
      label: {
        type: String,
        default: 'Click Me'
      }
    },
    methods: {
      handleClick() {
        this.$emit('click');
      }
    }
  };
  </script>
  
  <style scoped>
  .btn {
    padding: 10px 20px;
    background: #3498db;
    color: white;
    border: none;
  }
  </style>
  