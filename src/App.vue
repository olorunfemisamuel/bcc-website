<template>
  <div class="app">
    <!-- Navigation -->
    <NavBar />
    
    <!-- Router content will be displayed here -->
 
    
    
    <router-view />
    
    <!-- Footer will only show on home page -->
    <FooterSection/>
  </div>
</template>

<script setup>
import NavBar from '@/components/Nav-bar.vue';
import FooterSection from '@/components/FooterSection.vue';


</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  /* min-height: 100vh; */
  /* padding-top: 54px; */
}

body {
  margin: 0;
  padding: 0;
  /* overflow-x: hidden; */
}


.fade-in-section{
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 600ms ease, transform 600ms ease;
  will-change: opacity, transform;
}

.fade-in-section.is-visible{
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce){
  .fade-in-section{
    transition: none;
    transform: none;
  }
}
</style>