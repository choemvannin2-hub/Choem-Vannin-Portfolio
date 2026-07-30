<template>
  <main class="bg-background text-white pt-16 md:pt-24">
    <div class="grid lg:grid-cols-[35%_65%] md:grid-cols-2 lg:max-w-330 md:max-w-200 max-w-80 mx-auto gap-y-6 gap-4 animate-slide-up-15 pb-12">
      <section class="md:space-y-2 pt-12 md:pt-24">
        <span class="text-accent-blue text-[8px] md:text-xs font-semibold">● MY SKILLS</span>
        <h1 class="text-5xl md:text-6xl text-text font-semibold">Building</h1>
        <span class="text-4xl md:text-6xl font-semibold bg-linear-to-r from-65% from-accent-blue to-purple-700 bg-clip-text text-transparent drop-shadow-2xl">modern web</span>
        <h1 class="text-4xl md:text-6xl text-text font-semibold">experiences.</h1>
        <p class="text-text-muted pt-5 text-sm md:text-lg">I combine design, code and creativity to build fast,
        responsive and user-focused web application.
        </p>
        <div class="flex text-text gap-x-3 pt-6 justify-center md:justify-start">
          <button class="bg-linear-to-r from-70% from-accent-blue to-purple-700 py-3 px-4 rounded-lg text-xs hover:scale-102">
            <i class="fa-solid fa-rocket"></i> Explore My Projects
          </button>
          <button class="bg-mist-900 py-3 px-4 rounded-lg text-xs">View on Github <i class="fa-solid fa-square-arrow-up-right"></i></button>
        </div>
      </section>
      <!-- img section  -->
      <section class="hidden md:block">
        <img src="../assets/GPT-computer.png" alt="img" class="w-full">
      </section>
      <!-- skill box section -->
      <section class="mt-6 md:mt-0 bg-linear-to-b from-0% from-accent-blue to-20% to-background py-3 px-6 rounded-lg space-y-3 shadow shadow-accent-blue">
        <div class=" grid grid-cols-1">
          <h6 class="text-cyan-100 space-x-4"><span> ● FRONTEND DEVELOPER </span><i class="fa-solid fa-code"></i></h6>
        </div>

        <div class="grid md:grid-cols-2 gap-y-2">
          
          <!-- html -->
           <div v-for="(data, index) in frontend" :key="index" class="flex gap-x-4">
            <img :src="`${ data.img }`" alt="html" class="w-8 h-8 mt-2">
            <div>
              <h1>{{data.title}}</h1>
              <p class="text-text-muted text-sm">{{ data.describe }}</p>
            </div>
           </div>

         </div>

      </section>
      <section class="grid lg:grid-cols-[40%_60%] md:gap-4 gap-x-4 gap-y-6">
        <div>
          <div class="bg-linear-to-b from-0% from-accent-cyan to-20% to-background py-3 px-6 rounded-lg space-y-3 shadow shadow-accent-cyan">
        <div class="flex justify-between">
          <h6 class="text-cyan-100 space-x-4"><span>● FRAMWORKS & LIBRARIES </span><i class="fa-solid fa-layer-group"></i></h6>
        </div>
        <div class="grid grid-cols-1 gap-y-6">
          <!-- vue js -->
           <div class="flex gap-x-4">
            <img src="../assets/vue.svg" alt="html" class="w-8 h-8 mt-2">
            <div>
              <h1>Vue.js</h1>
              <p class="text-text-muted text-sm">
                Progressive framework for building user interfaces
              </p>
            </div>
           </div>
          <!-- react js -->
           <div class="flex gap-x-4 pb-14">
            <img src="../assets/reactjs.png" alt="html" class="w-8 h-8 mt-2">
            <div>
              <h1>React.js</h1>
              <p class="text-text-muted text-sm">
                Component-based library for building UI
              </p>
            </div>
           </div>
  
          </div>
        </div>
        </div>
        <div class="bg-linear-to-b from-0% from-purple-700 to-20% to-background py-3 px-6 rounded-lg space-y-3 shadow shadow-purple-700">
        <div class=" grid">
          <h6 class="text-cyan-100 space-x-4"><span>● TOOLS & WORKFLOW </span><i class="fa-solid fa-screwdriver-wrench"></i></h6>
        </div>
        <div class="grid md:grid-cols-2 gap-y-3">
          
           <div v-for="(data, index) in tools" :key="index" class="flex gap-x-4">
            <img :src="`${ data.img }`" alt="html" class="w-8 h-8 mt-2">
            <div>
              <h1>{{data.title}}</h1>
              <p class="text-text-muted text-sm">{{ data.describe }}</p>
            </div>
           </div>
          
          </div>

        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import img1 from "../assets/html.png"
import img2 from "../assets/bootstrap.png"
import img3 from "../assets/css-3.png"
import img4 from "../assets/tailwindcss.png"
import img5 from "../assets/js.png"
import img6 from "../assets/git.png"
import img7 from "../assets/responsive.png"
import img8 from "../assets/github.png"
import img9 from "../assets/deployment.png"
let frontend = [
  {
    img:img1,
    title:"HTML",
    describe:"Semantic markup and accessible structure"
  },
  {
    img:img3,
    title:"CSS",
    describe:"Modern styling, animations and layouts"
  },
  {
    img:img2,
    title:"Bootstrap",
    describe:"Responsive components and UI system"
  },
  {
    img:img4,
    title:"Tailwind CSS",
    describe:"Utility-fast CSS for rapid UI development"
  },
  {
    img:img5,
    title:"JavaScript",
    describe:"ES6+ features and dynamic interactions"
  },
]

let tools = [
  {
    img:img6,
    title:"Git",
    describe:"Version control and code management"
  },
  {
    img:img7,
    title:"Responsive Design",
    describe:"Building layouts that work on all devices"
  },
  {
    img:img8,
    title:"GitHub",
    describe:"Collabrate, review and ship better code"
  },
  {
    img:img9,
    title:"Deployment",
    describe:"Deploy and host apps seamlessly"
  },
]

</script>

<style scoped>

</style>