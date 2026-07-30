<template>
  <main class="bg-surface text-white pt-6">
    <div class=" grid xl:grid-cols-[40%_60%] xl:px-24 px-12 justify-center py-24">
      <!-- profile image -->
       <section class="grid justify-center xl:justify-start lg:pt-30 animate-slide-up-10">
         <div class="md:w-110 md:h-110 w-70 h-70 rounded-xl overflow-hidden shadow-primary-400 shadow-[0_0_25px_rgba(0,0,0,0.15)]">
           <img
             src="../assets/Profile.png"
             class="w-full h-full object-cover scale-110 lg:hover:scale-100 md:active:hover:scale-100 transition duration-700"
           />
         </div>
        </section>
        <!-- infomation -->
        <section class="grid xl:pl-12 pt-16 xl:pt-12 justify-center">
          <!-- about info -->
        <div class="animate-slide-up-10">
          <h1 class="xl:text-5xl text-3xl font-bold pb-4">About <span class="text-primary">Me</span></h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed md:text-xl text-text-secondary">
              I am an 19-year-old Computer Science student at the <span class="text-primary font-semibold">Royal University of Phnom Penh</span>. Driven by a passion for creating high-performance digital experiences, I focus on the intersection of modern aesthetics and technical excellence.
          </p>
          <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed md:text-xl text-text-secondary pt-3">
            Outside of coding, I enjoy exploring new technologies, working on personal projects, and continuously improving my web development skills.
          </p>
        </div>
        <!-- education background -->
        <div class="grid md:grid-cols-2 grid-cols-1 gap-6 mt-6 xl:mt-6">
          
          <!-- education -->
          <div class="shadow shadow-accent-blue bg-[#09215552] py-7 px-5 rounded-lg animate-slide-up-10 group">
            <h1 class="text-text-muted text-xl">
              <span class="bg-accent-cyan p-2 rounded-sm text-text mr-3 transition-all duration-300 group-hover:rounded-b-4xl">
                <i class="fa-solid fa-graduation-cap transition-transform duration-300 group-hover:-translate-y-1"></i>
              </span>
              EDUCATION
            </h1>
            <h1 class="font-bold pt-4">Royal University of Phnom Penh (RUPP)</h1>
            <p class="text-xs text-primary pt-1">Computer Science & Engineering</p>
          </div>

          <!-- location & AGE & NAME -->
          <div v-for="(data,index) in datas" :key="index" class="shadow shadow-accent-blue bg-[#09215552] py-7 px-5 rounded-lg animate-slide-up-10 group">
            <h1 class="text-text-muted text-xl">
              <span class="bg-[#070fef6b] py-2 px-3 rounded-sm text-text mr-3 transition-all duration-300 group-hover:rounded-b-4xl">
                <i :class="`fa-solid ${data.icon} transition-transform duration-300 group-hover:-translate-y-1`"></i>
              </span> 
                {{data.title}}
            </h1>
            <h1 class="font-bold pt-4">{{ data.content }}</h1>
          </div>
        </div>
        <!-- interest skill -->
         <div class="pt-6">
            <h1 class="md:text-3xl text-xl font-bold"><i class="fa-solid fa-code text-indigo-400"></i> Language & Frameworks</h1>
            <p class="md:flex grid grid-cols-2 gap-3 items-center gap-x-2 pb-2 pt-6">
              <span class="border-2 rounded-2xl px-6 py-2 border-primary text-primary"><i class="fa-brands fa-vuejs"></i> Vue.js</span>
              <span class="border-2 rounded-2xl px-6 py-2 border-primary text-primary"><i class="fa-brands fa-react"></i> React.js</span>
              <span class="border-2 rounded-2xl px-4 py-2 border-primary text-primary"><i class="fa-brands fa-square-js"></i> JavaScript</span>
              <span class="border-2 rounded-2xl px-4 py-2 border-primary text-primary"><i class="fa-brands fa-bootstrap"></i> Bootstrap</span>
            </p>
            <p class="md:flex grid items-center gap-3 animate-slide-in-left">
              <span class="mx-auto md:mx-0 xl:max-w-full border-2 rounded-2xl px-6 py-2 border-primary text-primary"><i class="fa-brands fa-envira"></i> Responsive Design</span>
              <span class="mx-auto md:mx-0 xl:max-w-full border-2 rounded-2xl px-6 py-2 border-primary text-primary"><i class="fa-brands fa-tailwind-css"></i> Tailwind CSS</span>
            </p>
         </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const datas=[
  {title:"LOCATION", content:"Kamboul, Phnom Penh, Cambodia", icon:"fa-location-dot"},
  {title:"AGE", content:"19 years old", icon:"fa-user"},
  {title:"NAME", content:"Choem Vannin", icon:"fa-address-card"},
]
</script>

<style scoped>

</style>