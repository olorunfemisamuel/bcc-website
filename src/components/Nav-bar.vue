<template>
  <div class="">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <img src="@/assets/images/logo-image/logo.png" alt="Logo" class="logo-img">
          <span class="logo-text">BELIEVERS CAVE CONFERENCE</span>
        </div>




              <!-- Hamburger Menu Button (Mobile Only) -->
        <button class="hamburger" @click="isMenuOpen = !isMenuOpen">
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
        </button>



        <ul class="nav-menu" :class="{ 'open': isMenuOpen }">
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><a href="https://forms.gle/fjgA26s9rX79xpTg6" class="nav-link">Register</a></li>
          <li><router-link to="/give-page" class="nav-link">Give</router-link></li>
          
          <li><a href="#merch" class="nav-link">Merch</a></li>
          <li><a href="#camp-schedule" class="nav-link">Camp Schedule</a></li>
          <li><a href="#contact" class="nav-link">GET your DP</a></li>
        </ul>
      </div>
    </nav>

  

  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  }
}
</script>

<style>
@import '../assets/css/navbar-style/navbar.css';
</style>
