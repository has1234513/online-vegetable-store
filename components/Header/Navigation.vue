<template>
  <div class="flex items-center space-x-4">
    <!-- Add navigation items here if needed -->
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const isLoginPage = computed(() => route.path === '/login');
</script>
