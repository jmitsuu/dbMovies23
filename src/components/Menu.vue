<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { FilmIcon, NewspaperIcon, TvIcon } from '@heroicons/vue/24/solid'
</script>
<template>
    <section class="relative">


        <header class="min-h-screen  h-full shadow-md items-center text-left bg-transparent xl:w-80 md:flex hidden gap-10 flex-col  left-0">
            <div>
                <h1 class="text-white font-bold text-[1.9rem] mt-7 uppercase">MoviesDB</h1>
                <h1 class="text-white font-semibold text-[1.3rem] mb-20 mt-10">Filmes</h1>
                <nav class=" flex flex-col text-gray-600 gap-8">
                    <RouterLink to="/" class="text-gray-100 font-semibold flex items-center gap-2"><FilmIcon class="h-4"/> Filmes</RouterLink>
                    <RouterLink to="/pages/about" class="text-gray-100 font-semibold  flex items-center gap-2"><NewspaperIcon class="h-4"/> Lançamentos</RouterLink>
                    <RouterLink to="/pages/about" class="text-gray-100 font-semibold  flex items-center gap-2"><TvIcon class="h-4"/>  TV Shows</RouterLink>
                </nav>
            </div>



        </header>

    </section>
</template>