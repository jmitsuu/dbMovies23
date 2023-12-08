<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue';
import MenuHeaderVue from './components/MenuHeader.vue';
</script>

<template>
  <main class="bg-gradient-to-br from-violet-950/75 to-purple-950 flex ">
      <Menu />
      <MenuHeaderVue />
    <div class="m-auto">
  
      <div class="container p-8 mt-24 min-h-screen w-screen ">
   
      <RouterView class="" />
      </div>

    </div>


  </main>
</template>


