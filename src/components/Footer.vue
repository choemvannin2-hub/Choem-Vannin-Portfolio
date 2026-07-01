<template>
  <main class="bg-surface w-full shadow-2xl shadow-white">
    <section class="grid md:grid-cols-2 xl:grid-cols-[30%_20%_25%_25%] px-10 md:px-20 text-white md:py-15 pt-15 pb-10">
      <!--  -->
      <div class="md:border-r border-border py-4">
        <div class="flex space-x-3 font-semibold text-xl tracking-wide leading-5">
          <img class="w-20" src="../assets/logoSmall.png" alt="">
          <span class="pt-3">CHOEM <span class="bg-linear-to-r from-sky-800 to-purple-800 bg-clip-text text-transparent">VANNIN</span><br>
            <span class="text-sm text-gray-400 font-mono tracking-[0.3rem]">DEVELOPER</span>
          </span>
        </div>
        <p class="text-gray-400 text-sm pt-6">IT Student & Aspiring Software Developer <br>
          passionate about building modern, <br>
          user-friendly web applications.
        </p>
        <div class="pt-6 space-x-6">
          <!-- git hub -->
          <a class="bg-gray-900 rounded-full px-2 py-1 border border-border" href="https://github.com/choemvannin2-hub" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <!-- Link In -->
          <a class="bg-gray-900 rounded-full px-2 py-1 border border-border" href="" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <!-- FaceBook -->
          <a class="bg-gray-900 rounded-full px-2 py-1 border border-border" href="https://www.facebook.com/share/1EyZy8ZH5H/?mibextid=wwXIfr" target="_blank">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <!-- Gmail -->
          <a class="bg-gray-900 rounded-full px-2 py-1 border border-border" href="mailto:choemvannin2@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
          </a>

        </div>
      </div>
      <!--  -->
      <div class="pl-10 md:border-r border-l border-border pt-5 md:pt-0">
        <h3>QUICK LINKS</h3>
        <hr class="md:max-w-12 max-w-24 pb-5">
        <div class="grid text-gray-400 space-y-3">
          <router-link to="/">> Home</router-link>
          <router-link to="/about">> About</router-link>
          <router-link to="/projects">> Projects</router-link>
          <router-link to="/skills">> Skills</router-link>
          <router-link to="/contact">> Contact</router-link>
        </div>
      </div>
      <div class="pl-10 md:border-r border-l border-border pt-5 md:pt-0">
        <h3>SERVICES</h3>
        <hr class="md:max-w-12 max-w-18 pb-5">
        <div class="grid text-gray-400 space-y-3">
          <router-link to="/projects">> Web Development</router-link>
          <router-link to="/projects">> Frontend Development</router-link>
          <router-link to="/projects">> Responsive Design</router-link>
          <router-link to="/projects">> Performace Optimization</router-link>
        </div>
      </div>
      <div class="pl-10 md:border-r border-l border-border pt-5 md:pt-0">
        <h3>CONTACT ME</h3>
        <hr class="md:max-w-12 max-w-25 pb-5">
        <div class="grid text-gray-400 gap-y-3">
          <p><i class="fa-solid fa-location-dot bg-linear-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent pe-1"></i> Phnom Penh, Cambodia</p>
          <p><i class="fa-solid fa-envelope bg-linear-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent pe-1"></i> choemvannin2@gmail.com</p>
          <p><i class="fa-solid fa-phone bg-linear-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent pe-1"></i> 0719808178</p>
          <p><i class="fa-regular fa-calendar bg-linear-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent pe-1"></i> Available for internship</p>
        </div>
      </div>
    </section>

    <!--  -->

    <section class="grid items-center md:grid-cols-2 bg-card border-t shadow shadow-primary-light border-border md:py-4 pt-4 pb-2 text-white">
      <h1 class="md:ps-16 mx-auto md:mx-0 text-text-muted text-xs md:text-[14px]">© 2026 <span class="text-primary">Choem Vannin</span>. All rights reserved.</h1>
      <div class="md:flex hidden justify-around xl:pl-20 xl:pr-24 items-center text-text-muted">
        <a href="">Privacy Policy</a>
        <i class="fa-solid fa-circle text-[0.3rem]"></i>
        <a href="">Terms of Service</a>
        <i class="fa-solid fa-circle text-[0.3rem]"></i>
        <button @click="myScoll">Back to Top</button>
        <button @click="myScoll" class="border-2 border-primary w-6 rounded-full px-6 py-4 md:flex hidden justify-center"><i class="fa-solid fa-angle-up text-primary-light"></i></button>
      </div>
    </section>
  </main>
</template>

<script setup>
  function myScoll(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
</script>

<style scoped>

</style>