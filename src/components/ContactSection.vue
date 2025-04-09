<template>
  <div class="contact-section">
    <h1>Event Handling Practice</h1>

    <!-- Prevent Default Action on Form Submit -->
    <form @submit.prevent="handleFormSubmit" class="form">
      <input type="text" v-model="name" placeholder="Enter your name" class="input" />
      <button type="submit" class="button">Submit</button>
    </form>

    <!-- Stop Event Propagation -->
    <button @click.stop="handleButtonClick" class="button">
      Click Me (Stop Event Propagation)
    </button>

    <!-- Event Capture Example -->
    <div @click.capture="handleCapture" class="capture-box">
      <p>Click inside the div (capture mode)</p>
      <button @click="handleClickInside" class="button">
        Click inside (non-capture)
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    handleFormSubmit() {
      alert(`Form submitted! Name: ${this.name}`);
    },
    handleButtonClick() {
      alert('Button clicked! Event propagation stopped.');
    },
    handleCapture() {
      console.log('Capture event fired!');
    },
    handleClickInside() {
      alert('Clicked inside the div!');
    },
  },
};
</script>

<style scoped>
@import './ContactSection.css';
</style>