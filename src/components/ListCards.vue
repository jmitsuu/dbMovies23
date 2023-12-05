<script setup>
import { ref, onMounted } from "vue";
import {useRouter} from "vue-router";
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

        <div class=" m-auto  ">
            <div
                :class="'Firstchild relative scale-90 justify-center flex items-center transition duration-300  rounded-sm hover:opacity-80 '">
                <div class="flex flex-col items-center justify-center ">

                    <div class="relative" @click="goToDescription(id)">
                        <img :class="!props.imgUrl
                            ? 'opacity-0'
                            : 'relative opacity-100 shadow-lg bg-red-400 h-[400px] hover:shadow-red-500 w-[400px] sm:w-[600px] xl:w-[300px] rounded-md transition-all duration-800'
                            " :src="`https://image.tmdb.org/t/p/w500/${props.imgUrl}`"
                           />
                        <h1 class="right-2 absolute top-0 z-50 font-bold text-yellow-400">
                            {{ vote.toFixed(0) }} %
                        </h1>
                    </div>



                    <div class="w-full ">
                        <h1 class=" text-gray-100 font-bold mt-3  ">
                            {{ props.title }}
                        </h1>


                    </div>

                </div>



            </div>
        </div>
    </div>
</template>

