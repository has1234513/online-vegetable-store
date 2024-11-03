<!-- components/TheHeader.vue -->
<template>
  <header class="py-4 px-6 ">
    <nav class="flex items-center justify-between">
      <!-- Logo -->
      

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <div class="flex items-center gap-4">
          <span class="text-black">Hi, {{ userName }}</span>
          <div class="h-4 w-px bg-black"></div>
          <NuxtLink to="/products" class="text-black hover:text-gray-900">Shop</NuxtLink>
          <div class="h-4 w-px bg-black"></div>
          <div class="text-black hover:text-gray-900">My profile</div>
        </div>

        <NuxtLink 
          to="/basket" 
          class="px-4 py-2 basket bg-tgreen-100 text-white rounded-md hover:bg-green-900 transition-colors"
        >
          Basket ({{ basketCount }})
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMenu"
        class="md:hidden p-2 text-black"
      >
        <svg 
          v-if="!isMenuOpen"
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg 
          v-else
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu Dropdown -->
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div 
        v-if="isMenuOpen"
        class="md:hidden mt-4 space-y-4 absolute left-0 right-0 bg-white px-6 py-4 shadow-lg w-[250px] ml-[-200px]"
      >
        <div class="flex flex-col space-y-3 pb-4 border-b">
          <span class="text-black">Hi, {{ userName }}</span>
          <NuxtLink 
            to="/shop" 
            class="text-black hover:text-gray-900"
            @click="closeMenu"
          >
            Shop
          </NuxtLink>
          <NuxtLink 
            to="/profile" 
            class="text-black hover:text-gray-900"
            @click="closeMenu"
          >
            My profile
          </NuxtLink>
        </div>
        <NuxtLink 
          to="/basket" 
          class="block w-full px-4 py-2 basket text-center bg-tgreen-100 text-white rounded-md hover:bg-green-900 transition-colors"
          @click="closeMenu"
        >
          Basket ({{ basketCount }})
        </NuxtLink>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useProductStore } from '@/stores/productStore'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useProductStore()
const isMenuOpen = ref(false)

const userName = 'Alfred Mugaeg'

const basketCount = computed(() => store.basket?.length || 0)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

</script>

<style scoped>
header {
  position: relative;
  z-index: 50;
}
</style>