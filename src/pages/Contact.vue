<template>
  <main class="bg-background">
    <div class="text-white animate-slide-up-15 pb-12">
      <!-- itro -->
      <section class=" grid md:grid-cols-2 max-w-xs md:max-w-3xl xl:max-w-7xl mx-auto pt-24 items-center">
        <div class="space-y-2">
          <span class="text-xs text-accent-cyan bg-linear-to-r from-10% from-accent-blue rounded-sm px-2 ms-24">● GET IN TOUCH</span>
          <h1 class="text-6xl font-bold text-text-secondary pt-3">Let's build</h1>
          <span class="text-5xl font-bold bg-linear-to-r from-20% from-accent-blue to-purple-600 bg-clip-text text-transparent">something amazing</span>
          <p class="text-text-muted pt-3 text-sm">I'm always open to discussing new projects. <br>creative ideas or opportunities to be part of your visions.</p>

          <div class="md:flex">
            <div class="flex md:w-48 gap-x-4">
              <p class="mt-1"><i class="fa-solid fa-crosshairs text-purple-400 md:text-xl bg-[#5063df52] px-2 py-2 rounded-sm"></i></p>
              <div class="space-y-2">
                <h1 class="font-semibold text-sm md:text-md">Open to Work</h1>
                <p class="text-xs text-text-muted">Available for freelance and full-time</p>
              </div>
            </div>
  
            <div class="flex md:w-48 gap-x-4 pt-4 md:pt-0">
              <p class="mt-1"><i class="fa-solid fa-paper-plane text-accent-blue md:text-xl bg-[#5063df52] px-2 py-2 rounded-sm"></i></p>
              <div class="space-y-2">
                <h1 class="font-semibold text-sm md:text-md">Quick Responsive</h1>
                <p class="text-xs text-text-muted">I usually reply within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
          
        <div class="hidden md:block">
          <img class="w-full" src="../assets/contact-img.png" alt="">
        </div>
      </section>

      <section class=" grid xl:grid-cols-[60%_40%] justify-center md:justify-normal max-w-xs md:max-w-2xl xl:max-w-7xl mx-auto gap-x-8 mt-12 gap-y-12 md:gap-y-16">
        <!-- sent message form -->
        <div class="shadow shadow-accent-blue p-6 rounded-xl">
          <form action="" class="grid gap-y-4">

            <header class="flex gap-x-4">
              <span class="mt-1"><i class="fa-regular fa-comment-dots text-accent-blue text-2xl"></i></span>
              <div class="space-y-1">
                <h1 class="font-bold text-text-secondary">Send me a message</h1>
                <p class="text-xs text-text-muted">Fill out the form below and I'll get back to you soon.</p>
              </div>
            </header>

            <div class="grid md:grid-cols-2 gap-x-4 gap-y-4 pt-8">
              <div class="border border-blue-950 rounded-md p-4 group bg-[#04226123]">
                  <h1 class="transition-all duration-300 group-focus-within:-translate-y-1">Your Name</h1>
                  <input type="text" class="outline-none w-full text-base" placeholder="Enter your name">
              </div>
              <div class="border border-blue-950 rounded-md p-4 group bg-[#04226123]">
                  <h1 class="transition-all duration-300 group-focus-within:-translate-y-1">Your Email</h1>
                  <input type="text" class="outline-none w-full text-base" placeholder="Enter your email">
              </div>
            </div>
            
            <div class="border border-blue-950 rounded-md p-4 group bg-[#04226123]">
                <h1 class="transition-all duration-300 group-focus-within:-translate-y-1">Subject</h1>
                <input type="text" class="outline-none w-full text-base" placeholder="What is this about?">
            </div>
            
            <div class="border border-blue-950 rounded-md p-4 group bg-[#04226123]">
                <h1 class="transition-all duration-300 group-focus-within:-translate-y-1">Your Message</h1>
                <textarea rows="6" cols="30" class="outline-none w-full text-base" placeholder="Tell me about your project or idea..."></textarea>
            </div>

            <button type="submit" class="py-3 rounded-lg bg-linear-to-r from-50% from-blue-700 to-purple">
              <i class="fa-regular fa-paper-plane"></i> 
              Send Message
            </button>
          </form>
        </div>

        <!-- information -->
        <div class="shadow shadow-blue-900 p-6 rounded-xl space-y-3">

          <header class="flex gap-x-4">
              <span class="mt-2"><i class="fa-regular fa-user text-accent-blue text-2xl"></i></span>
              <div class="space-y-1">
                <h1 class="font-bold text-text-secondary">Contact Information</h1>
                <p class="text-xs text-text-muted">Here's how you can reach me.</p>
              </div>
            </header>

            <div class="bg-[#04226123] flex gap-x-4 mt-8 p-4 border border-blue-950 rounded-md">
              <span><i class="fa-regular fa-envelope bg-[#13337663] p-3 rounded-md text-accent-cyan"></i></span>
              <div>
                <h1>Email</h1>
                <p class="text-text-secondary text-xs md:text-sm">choemvannin2@gmail.com</p>
              </div>
            </div>

            <div class="bg-[#04226123] flex gap-x-4 p-4 border border-blue-950 rounded-md">
              <span><i class="fa-solid fa-phone bg-[#13337663] p-3 rounded-md text-accent-blue"></i></span>
              <div>
                <h1>Phone</h1>
                <p class="text-text-secondary text-xs md:text-sm">+855 71 980 8178</p>
              </div>
            </div>

            <div class="bg-[#04226123] flex gap-x-4 p-4 border border-blue-950 rounded-md">
              <span><i class="fa-solid fa-location-dot bg-[#13337663] p-3 rounded-md text-purple-500"></i></span>
              <div>
                <h1>Location</h1>
                <p class="text-text-secondary text-xs md:text-sm">Kamboul, Phnom Penh</p>
              </div>
            </div>

            <div class="bg-[#04226123] flex gap-x-4 p-4 border border-blue-950 rounded-md">
              <span><i class="fa-regular fa-clock bg-[#13337663] p-3 rounded-md text-indigo-500"></i></span>
              <div>
                <h1>Available</h1>
                <p class="text-text-secondary text-xs md:text-sm">Mon - Sat, 7:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div class="pt-2">
              <h1 class="text-text">Let's Connect</h1>
              <p class="text-text-secondary text-xs pt-1">Find me on these platforms.</p>
            </div>

            <div class="pt-1 flex gap-x-6">
              <a href="https://github.com/choemvannin2-hub" target="_blank" class=" bg-[#13337663] p-3 rounded-md border border-gray-500">
                <i class="fa-brands fa-github text-2xl md:text-3xl"></i>
              </a>
              <a href="https://t.me/Choem_Vannin" target="_blank" class="bg-[#054e6963] p-3 rounded-md border border-cyan-500">
                <i class="fa-brands fa-telegram text-2xl md:text-3xl"></i>
              </a>
              <a href="" class="bg-[#104fd863] p-3 rounded-md border border-blue-500">
                <i class="fa-brands fa-linkedin-in text-accent-blue text-2xl md:text-3xl"></i>
              </a>
              <a href="" class="bg-[#b53fe312] p-3 rounded-md border border-purple-500">
                <i class="fa-brands fa-instagram text-fuchsia-400 text-2xl md:text-3xl"></i>
              </a>
            </div>
        </div>
      </section>

    </div>
  </main>
</template>

<script setup>

</script>

<style scoped>

</style>