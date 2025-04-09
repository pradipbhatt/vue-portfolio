<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <a href="#hero">My Portfolio</a>
      </div>
      <button class="hamburger" @click="toggleMenu">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </button>
      <ul :class="['nav-links', { 'nav-active': isMenuOpen }]">
        <li><a href="#hero" @click="closeMenu">Home</a></li>
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#projects" @click="closeMenu">Projects</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
/* Navbar container */
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Logo */
.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

/* Navigation links */
.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  transition: transform 0.3s ease-in-out;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
}

.nav-links li a::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: white;
  transition: width 0.3s;
}

.nav-links li a:hover::after {
  width: 100%;
}

/* Hamburger menu */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger .line {
  width: 25px;
  height: 3px;
  background-color: white;
  border-radius: 2px;
}

/* Responsive design */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #333;
    flex-direction: column;
    align-items: center;
    width: 100%;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
  }

  .nav-links.nav-active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-links li {
    margin: 1rem 0;
  }
}
</style>
