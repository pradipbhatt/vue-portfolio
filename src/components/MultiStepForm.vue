<template>
    <div class="multi-step-form">
      
      <!-- Step 1: Email Input -->
      <div v-if="step === 1" class="form-step">
        <h2 class="form-title">Step 1: Enter Your Email</h2>
        
        <!-- Binds input value to `email` in data() -->
        <input type="email" v-model="email" placeholder="Email" class="form-input" />
        
        <!-- On click, call nextStep() to move to next step -->
        <button @click="nextStep" class="form-button">Next</button>
      </div>
  
      <!-- Step 2: Password Input -->
      <div v-if="step === 2" class="form-step">
        <h2 class="form-title">Step 2: Enter Your Password</h2>
        
        <!-- Binds input value to `password` in data() -->
        <input type="password" v-model="password" placeholder="Password" class="form-input" />
        
        <div class="button-group">
          <!-- Back button to return to Step 1 -->
          <button @click="prevStep" class="form-button secondary">Back</button>
  
          <!-- Submit button calls submitForm() -->
          <button @click="submitForm" class="form-button">Submit</button>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        step: 1,        // Keeps track of current form step (1 or 2)
        email: "",      // Stores user's email input
        password: "",   // Stores user's password input
      };
    },
    methods: {
      // Called when clicking "Next" from Step 1
      nextStep() {
        if (this.email.trim() === "") {
          alert("Please enter your email.");  // Simple validation
          return;
        }
        this.step++;  // Move to Step 2
      },
  
      // Called when clicking "Back" in Step 2
      prevStep() {
        this.step--;  // Go back to Step 1
      },
  
      // Called when clicking "Submit" in Step 2
      submitForm() {
        if (this.password.trim() === "") {
          alert("Please enter your password.");  // Validate password
          return;
        }
  
        // Show final form data in alert (for demo purposes)
        alert(`Form submitted!\nEmail: ${this.email}\nPassword: ${this.password}`);
        
        // Reset form for reuse
        this.step = 1;
        this.email = "";
        this.password = "";
      },
    },
  };
  </script>
  

<style scoped>
.multi-step-form {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.form-step {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.form-button {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #0056b3;
}

.form-button.secondary {
  background-color: #6c757d;
  margin-right: 10px;
}

.form-button.secondary:hover {
  background-color: #5a6268;
}

.button-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>


