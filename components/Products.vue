<template>
  <div class="px-10 py-6 max-w-[1440px] mx-auto">
    <!-- Title and Sorting Section -->
    <div
      class="flex md:flex-row md: flex-col items-center justify-between mb-4"
    >
      <div class="flex flex-row items-baseline gap-2">
        <h1 class="font-normal text-[64px] leading-[76.8px] font-newsreader">
          In Store
        </h1>
        <span class="ml-6 text-[20px] font-light leading-[26px]">
          <span class="font-semibold">Fresh</span> —
          {{ formatDate(new Date()) }}
        </span>
      </div>

      <div class="flex gap-2 mr-14">
        <button
          v-for="sort in ['Default', 'A-Z', 'Z-A']"
          :key="sort"
          :class="[
            'px-3 py-2 rounded-[20px] border-[2px] border-tgrey-60 ho text-[16px] font-semibold leading-[20.8px];',
            store.filters.sortBy.toLowerCase() === sort.toLowerCase()
              ? 'bg-tgreen-100 text-twhite-100 hover:bg-tgreen-50'
              : 'bg-tgrey-50 hover:bg-tgrey-60',
          ]"
          @click="store.setSortBy(sort.toLowerCase())"
        >
          {{ sort }}
        </button>
      </div>
    </div>
    <hr class="mb-8" />

    <!-- Products Grid - Fixed 3 columns -->
    <div
      class="flex items-center space-y-10 md:space-y-0 flex-col md:grid xl:grid-cols-3 md:grid-cols-2 md:gap-8 mx-auto"
    >
      <div
        v-for="product in store.sortedProducts"
        :key="product.id"
        class="bg-tgrey-50 border-[2px] border-tgrey-60 rounded-[24px] max-w-[500px]"
      >
        <!-- Product Image -->
        <div class="mb-4 overflow-hidden rounded-t-[24px] bg-twhite-100">
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full object-cover"
          />
        </div>

        <!-- Product Info -->
        <div class="px-6 py-2">
          <div class="flex justify-between items-start mb-2">
            <div>
              <h3 class="text-[20px] leading-[26px] font-semibold">
                {{ product.name }}
              </h3>
              <p
                class="text-[20px] leading-[26px] font-semibold text-tgreen-100"
              >
                ${{ product.price }} /lb
              </p>
            </div>

            <button
              v-if="isInBasket(product.id)"
              @click="removeFromBasket(product.id)"
              class="py-2 px-4 bg-tred-100 text-white rounded-md hover:bg-red-300 transition-colors"
            >
              Remove
            </button>
            <button
              v-else
              @click="addToBasket(product.id)"
              class="py-2 px-4 bg-tgreen-100 text-white rounded-md hover:bg-tgreen-50 transition-colors"
            >
              Add to Basket
            </button>
          </div>

          <p class="text-[16px] leading-[24px] text-tgrey-100 mb-4">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';

const store = useProductStore();
const cartStore = useCartStore();

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

const isInBasket = (productId) => {
  return cartStore.basket?.some((item) => item.id === productId);
};

const addToBasket = (product) => {
  cartStore.addToBasket(product);
};

const removeFromBasket = (id) => {
  cartStore.removeFromBasket(id);
};
</script>

<style scoped>
/* Remove the previous grid styling since we're using fixed columns */
</style>
