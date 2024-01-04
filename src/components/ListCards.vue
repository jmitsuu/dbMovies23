<script setup>
import { ref, onMounted } from "vue";
import {useRouter} from "vue-router";
import { useRequests } from "../stores/requests";
import Vote from "../components/Vote.vue";
const store = useRequests()
const router = useRouter();
const props = defineProps({
    imgUrl: String,
    getInfo: Array,
    vote: Number,
    incrItem: Object,
    dataMovie: String,
    price: Number,
    title: String,
    itemPrice: Number,
    itemCart: String,
    id:Number
});
const goToDescription = (id)=>{
router.push({name:'description', params:{id}})
}
onMounted(() => {

});
</script>
<template>
    <div class="">

        <div class=" ">
            <div
                :class="'Firstchild  relative scale-90 justify-center flex items-center transition duration-300  rounded-sm hover:opacity-80  '">
                <div class="flex flex-col items-center justify-center   rounded-md hover:scale-105 transition-all ">
                    <div v-if="store.lazyLoad" class="w-[221px] h-[330px] flex justify-center items-center bg-slate-300 animate-pulse rounded-md">
                        <span>carregando...</span>

                    </div>

                    <div v-else class="relative cursor-pointer " @click="goToDescription(id)">
                        <img :src="`https://image.tmdb.org/t/p/original/${props.imgUrl}`"
                        class="h-[350px] w-[300px] "
                           />
                        <!-- <h1 class="right-2 absolute top-0 z-50 font-bold text-yellow-400">
                            {{ vote.toFixed(0) }} %
                        </h1> -->
                    </div>




                </div>



            </div>
        </div>
    </div>
</template>

