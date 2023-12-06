<script setup>
import axios from "axios";
import { useRequests } from "@/stores/requests.js";
import { ref, onMounted } from "vue";
import Layout from "../../components/Layout.vue";
import ListCards from "../../components/ListCards.vue"
const store = useRequests();
const countPage = ref(5);
const pages = ref([])
const selectPage = ref(1)
for (let i = 0; i < countPage.value; i++) {
  console.log(i)
  pages.value.push(i + 1)

}
function getApi(pg) {
  store.fetchApi(`movie/popular?language=pt-BR&page=${pg}`)
}
onMounted(() => {
  store.fetchApi(`movie/popular?language=pt-BR&page=${selectPage.value}`)
})
</script>

<template>
  <h1 class="mt-20 mb-8 font-bold text-white text-[2.0rem]">Todos os Filmes</h1>
  <nav aria-label="Page navigation example" class="mb-8">
    <ul class="flex items-center -space-x-px h-8 text-sm">
      <li class="bg-purple-400 rounded-full h-8 w-8 flex justify-center items-center">
        <a href="#" class="rounded-md">

          <svg class=" h-4 w-4 m-4  first-letter: rtl:rotate-180  text-white" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 1 1 5l4 4" />
          </svg>
        </a>
      </li>
      <li v-for="pg in pages">
        <a class="flex items-center 
          justify-center px-3 h-8 
          leading-tight text-white
          cursor-pointer
               " @click="getApi(pg)">{{ pg }}</a>
      </li>

      <li class="bg-purple-400 rounded-full h-8 w-8 flex justify-center items-center">
        <a href="#" class=" rounded-md">

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

      <div v-for="card in store.response" :key="card.id" class="">
        <ListCards :id="card.id" :imgUrl="card.poster_path" :getInfo="card" :vote="card.vote_average * 10"
          :dataMovie="card.release_date" :incrcard="card" :title="card.title" :cardCart="card" />



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