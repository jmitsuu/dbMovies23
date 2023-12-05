import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from "axios";
import { urlMovies } from '../https/fetchUrl';

export const useRequests = defineStore('useRequests', () => {
  const response = ref();
  const details = ref()
  
  async function fetchApi(fetch) {
const {results}= (await urlMovies.get(fetch)).data;
response.value = results;
  }

async function getDetails (fetch){
  const {data} = (await urlMovies.get(fetch));
  details.value = data
}
  return { getDetails, fetchApi , response, details }
})
