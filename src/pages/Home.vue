<template>
  <main class="hero h-screen pt-60 text-white">
    <section class="max-w-7xl mx-auto px-6 grid justify-center">
      <span class="max-w-40 mx-auto bg-[rgba(128,128,128,0.2)] rounded-2xl px-3 py-1 text-[8px] md:text-xs text-[rgba(216,230,255,0.8)] glow-text">
        <i class="fa-solid fa-circle fa-2xs glow-text" style="color: rgba(216,230,255,0.8);"></i> 
         Available for Projects
      </span>
      <!-- information -->
      <h1 class="text-3xl md:text-5xl font-extrabold leading-16 scale-y-110">
        Hi,I'm 
        <span class="md:text-5xl text-3xl font-bold bg-linear-to-r from-pink-300 to-sky-500 bg-clip-text text-transparent drop-shadow-2xl glow-text">Choem Vannin</span>
      </h1>
      <h1 class="md:text-3xl text-2xl mx-auto font-bold pb-12 scale-y-110 text-[rgba(216,230,255,0.8)]">{{ displayedText }} <span class="animate-pulse font-light">|</span></h1>
      <!-- btn -->
      <div class="space-x-6 mx-auto flex items-center justify-between md:text-3xl text-2xl animate-slide-up">
        <a href="https://github.com/choemvannin2-hub" target="_blank"><i class="fa-brands fa-github" style="color: rgb(216, 230, 255);"></i></a>
        <BaseBtn class="shadow-[0_0_40px_rgba(56,189,248,0.6)] md:shadow"><a href="https://t.me/Choem_Vannin" target="_blank"> Contact Me: <i class="fa-regular fa-paper-plane" style="color: rgb(216, 230, 255);"></i></a></BaseBtn>
        <router-link to="/contact"><i class="fa-regular fa-envelope" style="color: rgb(216, 230, 255);"></i></router-link>
      </div>

      <span class="md:hidden mx-auto pt-40 pb-5 animate-pulse"><i class="fa-solid fa-arrow-down" style="color: rgba(216,230,255,0.4);"></i></span>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue"
import BaseBtn from "../utils/BaseBtn.vue"

const roles = ["IT Student", "Frontend Developer"]

const displayedText = ref("")
const index = ref(0)
const roleIndex = ref(0)
const isDeleting = ref(false)

function type() {
  const currentRole = roles[roleIndex.value]
  let speed = isDeleting.value ? 50 : 120

  setTimeout(() => {
    if (!isDeleting.value) {
      displayedText.value = currentRole.slice(0, index.value + 1)
      index.value++

      if (index.value === currentRole.length) {
        setTimeout(() => (isDeleting.value = true), 1000)
      }
    } else {
      displayedText.value = currentRole.slice(0, index.value - 1)
      index.value--

      if (index.value === 0) {
        isDeleting.value = false
        roleIndex.value = (roleIndex.value + 1) % roles.length
      }
    }

    type()
  }, speed)
}

onMounted(() => {
  type()
})
</script>

<style scoped>
.hero{
  width:100%;
  background-image:url('../assets/background\ image.png');
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
}

.glow-text {
  animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
  0%,
  100% {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
  }

  50% {
    text-shadow:
      0 0 12px rgba(255, 255, 255, 0.6),
      0 0 24px rgba(56, 189, 248, 0.5);
  }
}
</style>