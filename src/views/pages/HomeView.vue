<script setup>
import axios from "axios";
import { useRequests } from "@/stores/requests.js";
import { ref, onMounted, computed } from "vue";
import Layout from "../../components/Layout.vue";
import ListCards from "../../components/ListCards.vue";
import Vote from "../../components/Vote.vue";
const store = useRequests();
const page = ref(1);

const nextPage = () => {
  page.value++;
  return store.fetchApi(`movie/popular?language=pt-BR&page=${page.value}`)
}
const backPage = () => {
 if(page.value > 1 ){
  page.value --;
 }
  return store.fetchApi(`movie/popular?language=pt-BR&page=${page.value}`)
}
onMounted(() => {
  store.fetchApi(`movie/popular?language=pt-BR`)
})
</script>

<template>
  <h1 class="mt-20 mb-8 font-bold text-white text-[2.0rem]">Todos os Filmes</h1>
  <nav aria-label="Page navigation example" class="mb-8">
    <ul class="flex items-center -space-x-px h-8 text-sm">
      <li class="bg-purple-400 rounded-full h-8 w-8 flex justify-center items-center">
        <a href="#" @click="backPage" class="rounded-md">

          <svg class=" h-4 w-4 m-4  first-letter: rtl:rotate-180  text-white" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 1 1 5l4 4" />
          </svg>
        </a>
      </li>
   
      <span class="text-gray-200 text-xl p-6"> {{ page }}</span>
      <li class="bg-purple-400 rounded-full cursor-pointer h-8 w-8 flex justify-center items-center">
        <a @click="nextPage" class=" rounded-md">

          <svg class=" h-4 w-4 m-4  first-letter: rtl:rotate-180  text-white" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
  <Layout>

    <template #cards>

      <div v-for="card in store.response" :key="card.id" class=" m-1 flex flex-col p-1  ">
        <ListCards :id="card.id" :imgUrl="card.poster_path" :getInfo="card" :vote="card.vote_average * 10"
          :dataMovie="card.release_date" :incrcard="card" :title="card.title" :cardCart="card" />

        <h1 class=" text-gray-100 font-bold mt-3  ">

          {{ card.title }}
          <Vote :voteAv="card.vote_average" :styleVote="'h-4 w-4 text-yellow-500'" />

        </h1>

      </div>

    </template>
  </Layout>
</template>
<style scoped>
a:active {
  color: lime;
}

/* links ativos */
</style>