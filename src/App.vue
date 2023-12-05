<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue';
import MenuHeaderVue from './components/MenuHeader.vue';
</script>

<template>
  <main class="bg-gradient-to-br from-blue-800 to-purple-950 flex ">
      <Menu />
    <div class="flex flex-col ">
      <div class="container p-8">
        <MenuHeaderVue />
      <RouterView class="" />
      </div>

    </div>


  </main>
</template>


