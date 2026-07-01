<template>
    <div class="grid grid-rows-6 gap-y-6 md:gap-y-8 group">
        <div class="row-span-6 rounded-2xl overflow-hidden relative">
            <img class="w-full h-full object-cover scale-100 transition-all duration-500 group-hover:scale-110" 
            v-if="image"
            :src="props.image"
            alt="card img"
            >
            <div class="absolute left-6 md:bottom-8 bottom-4 flex gap-x-3 text-xs lg:text-lg">
                <p class="text-primary rounded-sm px-3 border bg-[rgba(196,65,82,0.5)] border-[rgba(255,192,203,0.8)] font-semibold">
                    {{ props.tag1 }}
                </p>
                <p class="text-[rgb(192,255,249)] rounded-sm px-3 border bg-[#1bb3d8] border-accent-cyan font-semibold">
                    {{ props.tag2 }}
                </p>
            </div>
        </div>
        <div class="row-span-1">
            <h1 class="md:text-3xl text-2xl font-bold transition-all duration-500 group-hover:text-primary">{{ props.title }}</h1>
            <p class="text-text-muted pt-3"> {{ props.description }} </p>
        </div>
        <div class="row-span-1 flex justify-start items-center gap-x-3">
            <slot />
        </div>
    </div>
</template>

<script setup>

  const props= defineProps({
    title: String,
    description: String,
    image: String,
    tag1: String,
    tag2: String
  })
  
  
</script>

<style scoped>
  
</style>