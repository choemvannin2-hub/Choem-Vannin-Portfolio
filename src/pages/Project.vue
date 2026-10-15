<template>
  <main class="min-h-screen bg-background text-white md:pt-24 pt-8">
    <div class="xl:w-6xl lg:w-4xl md:w-2xl px-12 md:px-0 mx-auto py-20">

      <!-- Header text of project page -->
      <section class="animate-slide-up-10">
        <h1 class="text-3xl xl:text-5xl font-bold">
          Featured <span class="text-primary">Projects</span>
        </h1>
        <p class="pt-6 font-medium leading-8 text-text-secondary">
          A curated collection of projects that showcase my passion for building
          modern, high-performance web applications and solving real-world problems
          through thoughtful design and clean code.
        </p>
        <a class="flex items-center gap-x-2 pt-6 text-primary md:justify-end justify-start" href="https://github.com/choemvannin2-hub" target="_blank">
          <p>Explore on GitHub</p>
          <i class="fa-solid fa-arrow-right text-text-muted transition-transform duration-300 group-hover:translate-x-1"></i>
        </a>
      </section> 

       <!-- body of Project page -->
       <section class="grid md:grid-cols-2 md:gap-x-10 gap-y-16 pt-12 animate-slide-up-15">
        <!-- Project -->
        <CardProject v-for="(project,index) in projects" :key="index"
          :title="project.title" 
          :tag1="project.tag1"
          :tag2="project.tag2"
          :description="project.description"
          :image="project.image"
          >
            <a href="https://nin-store-cambodia.vercel.app/" class="bg-[rgba(128,128,128,0.2)] text-center rounded-2xl px-4 py-2" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>
            <a href="https://nin-store-cambodia.vercel.app/" class="bg-[rgba(128,128,128,0.2)] rounded-full px-4 py-3" target="_blank"><i class="fa-solid fa-angle-left"></i><i class="fa-solid fa-angle-right"></i></a>
        </CardProject>
        
       </section>
    </div>
  </main>
</template>

<script setup>
import myImage1 from "../assets/portfolio v2.png"
import myImage2 from "../assets/Nin-Store.png"
import myImage3 from "../assets/TaskFlow.png"
import myImage4 from "../assets/Wanderlust.png"
import CardProject from '../utils/CardProject.vue';

const projects=[
  { title:"Vannin Portfolio v2",
    tag1:"REACT.JS", tag2:"RESPONSIVE",
    description:"A high-performance developer portfolio engineered for visual impact and technical excellence.",
    image: myImage1
  },

  {
    title:"Nin-Store Online Shop",
    tag1:"VUE.JS", tag2:"RESPONSIVE",
    description:"A premium e-commerce experience built with modern technologies and seamless interactions.",
    image: myImage2
  },

  {
    title:"TaskFlow Pro",
    tag1:"REACT.JS", tag2:"RESPONSIVE",
    description:"An intelligent productivity dashboard designed for efficient task management and collaboration.",
    image: myImage3
  },

  {
    title:"Wanderlust",
    tag1:"VUE.JS", tag2:"RESPONSIVE",
    description:"A modern travel platform delivering immersive exploration and effortless trip planning.",
    image: myImage4
  }
]

function goToProject(){
  alert("This project is underdevelopment🚧\nTry again later.")
}
</script>

<style scoped>

</style>