<template>
  <main class="md:fixed hidden md:block w-full z-50">
    <section class="flex shadow-2xs bg-transparent backdrop-blur-md rounded-4xl mt-4 max-w-6xl mx-auto">
      <div class="lg:pe-70 sm:pe-60">
        <router-link to="/" aria-label="Choem Vannin home"><img class="w-20 ms-5 py-2 " src="../assets/logo.png" alt="Choem Vannin logo"></router-link>
      </div>
      <div class="flex w-2xl myColor justify-around items-center font-semibold text-lg font-sans">
        <!-- Home page -->
        <router-link to="/" class="myHover flex items-center gap-x-2 transition-transform duration-300 hover:-translate-y-1 animate-slide-up">
          <i class="fa-solid fa-house text-sm"></i> 
          Home
        </router-link>
        <!-- About page -->
        <router-link to="/about" class="myHover flex items-center gap-x-2 transition-transform duration-300 hover:-translate-y-1 animate-slide-up-10">
          <i class="fa-solid fa-user text-sm"></i> 
          About
        </router-link>
        <!-- Projects page -->
        <router-link to="/projects" class="myHover flex items-center gap-x-2 transition-transform duration-300 hover:-translate-y-1 animate-slide-up-15">
          <i class="fa-solid fa-briefcase text-sm"></i> 
          Projects
        </router-link>
        <router-link to="/skills" class="myHover flex items-center gap-x-2 transition-transform duration-300 hover:-translate-y-1 animate-slide-up-18">
          <i class="fa-solid fa-award text-sm"></i> 
          Skills
        </router-link>
        <router-link to="/contact"><BaseBtn>Contact</BaseBtn></router-link>
        <button><i class="fa-solid fa-circle-question"></i></button>
      </div>
    </section>
  </main>
</template>

<script setup>
  import BaseBtn from "../utils/BaseBtn.vue";
</script>

<style scoped>
.myHover {
  position: relative;
  text-decoration: none;
}

/* Underline */
.myHover::after {
  content: "";
  position: absolute;
  cursor: pointer;
  
  left: 50%;
  bottom: -4px;

  width: 0;
  height: 3px;

  background: #38bdf8;

  transform: translateX(-50%);
  transition: width 0.3s ease;
}

/* Hover effect */
.myHover:hover::after {
  width: 100%;
}

/* Active page */
.router-link-exact-active::after {
  width: 100%;
}

/* Active page glow */
.router-link-exact-active {
  filter: drop-shadow(0 0 8px rgba(56,189,248,0.9));
}
.myColor{
  color: rgba(255, 255, 255, 0.8);
}
</style>
