<template>
  <div class="">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <img
  v-if="isMenuOpen"
  src="@/assets/images/logo-image/logo.png"
  alt="Logo"
  class="menu-overlay-logo"
/>
        <div class="nav-logo">
          <img src="@/assets/images/logo-image/BCC-black-logo 1.png" alt="Logo" class="logo-img">
          <span class="logo-text">BELIEVERS CAVE <br> CONFERENCE</span>
        </div>




              <!-- Hamburger Menu Button (Mobile Only) -->
        <button class="hamburger" @click="isMenuOpen = !isMenuOpen">
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
        </button>



        <ul class="nav-menu" :class="{ 'open': isMenuOpen }">
         <li @click="closeMenu">
  <router-link to="/" class="nav-link">Home</router-link>
</li>
<li @click="closeMenu">
  <a href="https://forms.gle/fjgA26s9rX79xpTg6" class="nav-link">Register</a>
</li>
<li @click="closeMenu">
  <router-link to="/give-page" class="nav-link">Give</router-link>
</li>
<li @click="closeMenu">
  <a href="#merch" class="nav-link">Merch</a>
</li>
<li @click="closeMenu">
  <a href="#camp-schedule" class="nav-link">Camp Schedule</a>
</li>
<li @click="closeMenu">
  <a href="#contact" class="nav-link">GET your DP</a>
</li>


<li class="nav-menu-footer">
  <a
    href="https://web.facebook.com/believerscaveconference"
    class="nav-footer-icon-link"
    aria-label="Facebook"
    target="_blank"
    rel="noopener"
  >
    <svg class="nav-footer-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.4-.1-2.7-.1c-2.7 0-4.5 1.6-4.5 4.6V11H7v3h2.6v8h3.9z"/>
    </svg>
  </a>

  <a
    href="https://www.instagram.com/believerscaveconference?utm_source=ig_web_button_share_sheet&igsh=MTd5OTJ6OGhtdWFoaA=="
    class="nav-footer-icon-link"
    aria-label="Instagram"
    target="_blank"
    rel="noopener"
  >
    <svg class="nav-footer-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7zM18 6.3a1 1 0 1 1 0 2.01a1 1 0 0 1 0-2.01zM12 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4z"/>
    </svg>
  </a>

  <a
    href="mailto:believerscaveconference@gmail.com"
    class="nav-footer-icon-link"
    aria-label="Email"
  >
    <svg class="nav-footer-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4l-8 5L4 8V6l8 5l8-5v2z"/>
    </svg>
  </a>
</li>

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
    };
  },
  methods: {
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}


</script>

<style>
@import '../assets/css/navbar-style/navbar.css';
</style>
