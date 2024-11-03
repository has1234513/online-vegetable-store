<template>
  <header class="bg-twhite-100">
    <nav
      class="max-w-[1440px] h-[112px] px-4 mx-auto flex justify-between items-center"
    >
      <router-link
        to="/"
        class="text-[32px] leading-[32px] font-medium font-newsreader text-tgreen-100"
      >
        VegetableBL
      </router-link>
      <div v-if="!isLoginPage" class="flex items-center space-x-4">
        <Navigation />
      </div>
    </nav>
    <hr v-if="isLoginPage" class="border-b border-tblack-100" />
  </header>
</template>

<script setup>
import Navigation from './Header/Navigation.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isLoginPage = computed(() => route.path === '/');
</script>
