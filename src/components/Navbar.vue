<template>
  <main class="md:fixed hidden md:block w-full z-50">
    <section class="flex shadow-2xs bg-transparent backdrop-blur-md rounded-4xl mt-4 max-w-6xl mx-auto">
      <div class="lg:pe-70 sm:pe-60">
        <img class="w-20 ms-5 py-2 " src="../assets/logo.png" alt="">
      </div>
      <div class="flex w-2xl myColor justify-evenly items-center font-semibold text-lg font-sans">
        <router-link to="/" class="myHover">Home</router-link>
        <router-link to="/about" class="myHover">About</router-link>
        <router-link to="/projects" class="myHover">Projects</router-link>
        <router-link to="/skills" class="myHover">Skills</router-link>
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
  filter: drop-shadow(0 0 8px rgba(56,189,248,0.8));
}
  .myColor{
    color: rgba(255, 255, 255, 0.8);
  }
</style>