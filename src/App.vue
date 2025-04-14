<template>
  <div id="app">
    <AppNavbar />
    <Home />
    <DayTwo />
    <DayThree />
    <MultiStepForm />
    <BasicComponent title="Hello madam ji <3" description="This is a basic component." />
    <ProductCard name="Sneakers" description="Comfortable and stylish" :price="59.99" />
    <ButtonComponent text="Click Me" @click="handleClick" />
    <FooterComponent />
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
import Home from "@/views/Home.vue";
import DayTwo from "@/components/DayTwo.vue";
import DayThree from "@/components/DayThree.vue";
import MultiStepForm from "@/components/MultiStepForm.vue";
import BasicComponent from "@/components/BasicComponent.vue";
import ProductCard from "@/components/ProductCard.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    Home,
    DayTwo,
    DayThree,
    MultiStepForm,
    BasicComponent,
    ProductCard,
    ButtonComponent,
    FooterComponent,
  }
};
</script>
