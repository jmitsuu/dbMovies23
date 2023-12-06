<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import {useRequests} from "@/stores/requests.js";
import {ref} from "vue";
const store = useRequests();

</script>
<template>

    <section class="relative">


    <header class=" min-w-full absolute top-0 left-4  flex h-20 justify-end items-center xl:gap-20 pr-20 ">
        <span class="relative z-50">
            <MagnifyingGlassIcon v-if="!store.inputText" class="text-white h-4 w-4 absolute bottom-3" />
            <input type="text" placeholder="find whatever you want" class="h-10 bg-transparent border-b outline-none pl-6 text-white"
            v-model="store.inputText"
            />
        </span>
      
        <nav class=" md:flex hidden items-center gap-3  float-right  text-gray-600 justify-end">
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