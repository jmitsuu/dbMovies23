<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRequests } from "../../stores/requests";
const store = useRequests();
const route = useRoute();

const selectedCard = computed(() => {
  return store.response.find((item) => item.id === Number(route.params.id));
});
onMounted(() => {
  store.getDetails(`/movie/${route.params.id}?language=pt-BR`);
});
</script>

<template>
  <div
    class="container shadow-2xl flex gap-16 justify-center bg-gradient-to-tr from-black to-transparent p-10"
  >
    <div class="">
      <div>
        <h1 class="text-white">{{ selectedCard.vote_average.toFixed(1) }}</h1>
        <div>
          <h1 class="text-white font-bold text-[2.2rem]">Genero</h1>
          <div v-for="detail in store.details.genres">
            <p v-if="store.lazyLoad" class="w-20 h-4 bg-gradient-to-tr from-gray-50 animate-pulse"></p>
            <p v-else class="text-gray-400 text-[1.3rem]">{{ detail.name }}</p>
          </div>
        </div>
        <div>
          <h1 class="text-white font-bold text-[2.2rem]">Elenco</h1>
          <p class="text-gray-400 text-[1.3rem]">lorem</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-[400px] text-[1.3rem]">
      <h1 class="text-white font-semibold text-[2.4rem]">
        {{ selectedCard.title }}
      </h1>
      <p class="text-gray-300">{{ selectedCard.release_date }}</p>
      <div class="mt-10">
        <p class="text-gray-200">{{ selectedCard.overview }}</p>
      </div>
    </div>

    <img
      :src="`https://image.tmdb.org/t/p/original/${selectedCard.poster_path}`"
      class="w-[350px] h-[500px]"
    />
  </div>
</template>
