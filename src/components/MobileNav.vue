<template>
  <section id="nav" :class="[`fixed z-50 block md:hidden w-full scroll-m-2 pt-2  transition-all duration-300`,
  isScrolled ? 'bg-[rgba(128,128,128,0.2)] backdrop-blur-md shadow-lg' : 'bg-transparent'
  ]">
    <img class="w-20 ms-4" src="../assets/logo.png" alt="">
  </section>
  <main class="fixed z-50 block md:hidden w-full bottom-4">
    <section class="relative max-w-90 sm:max-w-xl  mx-auto rounded-2xl bg-slate-800/90 pt-3 pb-6 flex justify-around text-white">
        <router-link to="/" class="active myIcon">
          <i class="fa-regular fa-compass"></i>
          <span class="absolute text-[10px] font-mono bottom-2">Home</span>
        </router-link>
        <router-link to="/about" class="active myIcon">
          <i class="fa-regular fa-user"></i>
          <span class="absolute text-[10px] font-mono bottom-2">About</span>
        </router-link>
        <router-link to="/skills" class="active myIcon">
          <i class="fa-regular fa-star"></i>
          <span class="absolute text-[10px] font-mono bottom-2">Skill</span>
        </router-link>
        <router-link to="/projects" class="active myIcon">
          <i class="fa-solid fa-laptop-code"></i>
          <span class="absolute text-[10px] font-mono bottom-2">Projects</span>
        </router-link>
        <router-link to="/contact" class="active myIcon">
          <i class="fa-regular fa-envelope"></i>
          <span class="absolute text-[10px] font-mono bottom-2">Contact</span>
        </router-link>
    </section>
  </main>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 5;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

</script>

<style scoped>
.myIcon{
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.router-link-exact-active{
  background-color: rgba(128, 128, 128, 0.63);
  padding: 4px;
  border-radius: 4px;
}
</style>