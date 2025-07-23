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
</style>