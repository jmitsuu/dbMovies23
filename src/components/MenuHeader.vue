<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>

    <section class="relative">


    <header class=" min-w-full flex h-20 justify-end items-center xl:gap-20 pr-20 ">
        <input type="text" placeholder="find whatever you want" class="h-10 bg-transparent border-b outline-none text-white" />
        <nav class=" md:flex hidden items-center gap-3 w-screen float-right  text-gray-600 justify-end">
            <RouterLink to="/" class="text-gray-100 font-semibold">Filmes</RouterLink>
            <RouterLink to="/about" class="text-gray-100 font-semibold">Social</RouterLink>
            <RouterLink to="/about" class="text-gray-100 font-semibold">Novidades</RouterLink>
            <RouterLink to="/about" class="text-gray-100 font-semibold">Sobre</RouterLink>
        </nav>
     

    </header>

</section>
</template>
<style scoped>
::placeholder {
  color: gray;
  opacity: 1; /* Firefox */
}
</style>