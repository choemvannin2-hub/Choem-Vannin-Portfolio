<template>
  <main class="bg-[#0B1120] text-white pt-24 pb-20 px-6 md:px-12 lg:px-24">
    <div class="max-w-7xl mx-auto">
      
      <!-- Header Section -->
      <header class="mb-16 animate-slide-up">
        <h1 class="text-4xl md:text-6xl font-black mb-4">
          About <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Me</span>
        </h1>
        <div class="h-1.5 w-24 bg-primary-500 rounded-full"></div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left Column: Profile Image & Personal Info -->
        <div class="lg:col-span-5 xl:col-span-4 space-y-8 animate-slide-in-left">
          <!-- Profile Image Card -->
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative bg-surface rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="../assets/ChoemVannin.PNG"
                alt="Choem Vannin Profile"
                class="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <!-- Quick Info Cards (Bento Style) -->
          <div class="grid grid-cols-1 gap-4">
            <div v-for="(data, index) in personalInfo" :key="index" 
                 class="p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-500/20 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <i :class="`fa-solid ${data.icon} text-xl`"></i>
                </div>
                <div>
                  <p class="text-xs text-text-muted uppercase tracking-wider font-semibold">{{ data.title }}</p>
                  <p class="text-lg font-bold">{{ data.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Bio & Experience -->
        <div class="lg:col-span-7 xl:col-span-8 space-y-12 animate-slide-up-10">
          <!-- Bio -->
          <section>
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <i class="fa-solid fa-user-tie text-secondary-400"></i> My Story
            </h2>
            <div class="space-y-4 text-lg text-text-secondary leading-relaxed">
              <p>
                I am a 19-year-old Computer Science student at the 
                <span class="text-primary-400 font-bold">Royal University of Phnom Penh (RUPP)</span>. 
                My journey into the digital world is fueled by a relentless passion for crafting high-performance, 
                visually stunning experiences that live at the intersection of modern aesthetics and technical excellence.
              </p>
              <p>
                As a developer, I don't just write code; I build digital solutions that solve problems and engage users. 
                I thrive in environments that challenge me to learn new technologies and push the boundaries of what's possible on the web.
              </p>
            </div>
          </section>

          <!-- Education Section -->
          <section>
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <i class="fa-solid fa-graduation-cap text-accent-cyan"></i> Education
            </h2>
            <div class="relative pl-8 border-l-2 border-white/10 space-y-12">
              <!-- Education Item -->
              <div class="relative">
                <div class="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#0B1120] border-4 border-primary-500"></div>
                <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-primary-500/50 transition-colors">
                  <span class="text-xs font-bold text-primary-400 uppercase tracking-widest">2023 - Present</span>
                  <h3 class="text-xl font-bold mt-1">Royal University of Phnom Penh</h3>
                  <p class="text-accent-cyan font-medium">B.Sc. in Computer Science & Engineering</p>
                  <p class="mt-3 text-text-muted">
                    Focusing on core software engineering principles, algorithms, and modern web architectures.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Skills Grid -->
          <section>
            <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <i class="fa-solid fa-code text-primary-400"></i> Skills & Expertise
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div v-for="skill in skills" :key="skill.name" 
                   class="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:scale-105 transition-transform duration-300">
                <i :class="`${skill.icon} text-2xl ${skill.color}`"></i>
                <span class="font-medium">{{ skill.name }}</span>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
const personalInfo = [
  { title: "Location", content: "Phnom Penh, Cambodia", icon: "fa-location-dot" },
  { title: "Age", content: "19 Years Old", icon: "fa-calendar-days" },
  { title: "Experience", content: "Frontend Focused", icon: "fa-briefcase" },
  { title: "Current Study", content: "CS at RUPP", icon: "fa-university" }
]

const skills = [
  { name: "Vue.js", icon: "fa-brands fa-vuejs", color: "text-[#42b883]" },
  { name: "React.js", icon: "fa-brands fa-react", color: "text-[#61dafb]" },
  { name: "JavaScript", icon: "fa-brands fa-js", color: "text-[#f7df1e]" },
  { name: "Tailwind CSS", icon: "fa-solid fa-wind", color: "text-[#38bdf8]" },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "text-[#7952b3]" },
  { name: "Responsive Design", icon: "fa-solid fa-mobile-screen", color: "text-[#10b981]" }
]
</script>

<style scoped>
.bg-surface {
  background-color: var(--color-surface, #141218);
}
</style>