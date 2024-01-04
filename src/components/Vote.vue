<script setup>
import { StarIcon } from '@heroicons/vue/24/solid';
import {ref, onMounted} from 'vue';


const props = defineProps(
    {
        voteAv:Number,
        styleVote:String,
    }
)

onMounted(()=>{
  
})
</script>
<template>

     <div class="flex">
        <StarIcon :class="props.styleVote"  v-if="props.voteAv > 1 "/>
        <StarIcon :class="props.styleVote" v-if="props.voteAv > 2" />
        <StarIcon :class="props.styleVote" v-if="props.voteAv > 3 || props.voteAv < 4 "  />
        <StarIcon :class="props.styleVote" v-if="props.voteAv > 5 " />
        <StarIcon :class="props.styleVote" v-if="props.voteAv > 8"  />
       
     </div>


</template>