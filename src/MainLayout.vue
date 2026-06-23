<template>
    <main class="hero">

        <!-- Navigation Bar -->
        <Navbar/>
        <!-- Mobile Navigation Bar -->
         <MobileNav/>
        <!-- Home -->
        <router-view/>
        
        <!-- Footer -->
        <Footer/>
    </main>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'
import MobileNav from './components/MobileNav.vue';

  
</script>

<style scoped>

</style>