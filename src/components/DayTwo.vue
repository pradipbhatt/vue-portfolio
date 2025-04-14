<template>
    <div>
        <h1>Conditional Rendering in Vue</h1>
        
        <!-- v-if example -->
        <p v-if="isVisible">This text is visible because isVisible is true.</p>
        <p v-else>This text is visible because isVisible is false.</p>
        
        <!-- v-show example -->
        <p v-show="isShown">This text is conditionally shown using v-show.</p>
        
        <button @click="toggleVisibility">Toggle v-if/v-else</button>
        <button @click="toggleShow">Toggle v-show</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: true,
            isShown: true,
        };
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
        toggleShow() {
            this.isShown = !this.isShown;
        },
    },
};
</script>

<style scoped>
p {
    margin: 10px 0;
}
</style>