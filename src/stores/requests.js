import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { urlMovies } from "../https/fetchUrl";

export const useRequests = defineStore("useRequests", () => {
  const response = ref();
  const details = ref([]);
  const inputText = ref("");
  const lazyLoad = ref(false);
  
  async function fetchApi(fetch) {
    lazyLoad.value = true;
    setTimeout(async () => {
      const { results } = (await urlMovies.get(fetch)).data;
      response.value = results;
      lazyLoad.value = false;
    }, 200);
  }

  async function getDetails(fetch) {

    lazyLoad.value = true;
    setTimeout(async () => {
      const { data } = await urlMovies.get(fetch);
      details.value = data;
      lazyLoad.value = false;
    }, 200);

  }
  return { getDetails, fetchApi, response, details, inputText, lazyLoad };
});
