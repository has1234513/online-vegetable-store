<template>
  <div class="px-10 py-6 max-w-[1440px] mx-auto font-inter">
    <!-- Title and Sorting Section -->
    <div
      class="flex md:flex-row md: flex-col items-center justify-between mb-4"
    >
      <div class="flex flex-row items-baseline gap-2">
        <h1 class="font-normal text-[64px] leading-[76.8px] font-newsreader">
          Basket
        </h1>
        <span class="ml-6 text-[20px] font-light leading-[26px]">
          {{ cartStore.basket?.length }} item{{
            cartStore.basket?.length === 1 ? '' : 's'
          }}
        </span>
      </div>
    </div>
    <hr class="mb-8" />

    <!-- Products Grid - Fixed 3 columns -->

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Cart Items Section -->
      <div class="lg:col-span-2 space-y-4">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="bg-tgrey-50 border-[2px] border-tgrey-60 rounded-[24px] flex items-center gap-4"
        >
          <!-- Product Image -->
          <img
            :src="item.product.image"
            :alt="item.product.name"
            class="h-[160px] object-cover rounded-l-[24px]"
          />

          <!-- Product Details -->
          <div class="flex-1 p-3">
            <h3 class="text-[20px] leading-[26px] font-semibold">
              {{ item.product.name }}
            </h3>
            <p class="text-[20px] leading-[26px] font-semibold text-tgreen-100">
              ${{ item.product.price }} / lb
            </p>

            <!-- Quantity Editor -->
            <div class="flex items-center gap-2 mt-2">
                <div
                  v-if="!isEditing[item.id]"
                  class="bg-white px-2 py-1 border-[1px] border-tgrey-60 font-bold rounded-[20px] text-center cursor-pointer flex"
                  @click="startEditing(item.id)"
                >
                  {{ item.pounds }}  lb
                  <button class="text-tgrey-100 hover:text-gray-600 ml-10 my-auto">
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                </div>
                <input
                  v-else
                  type="text"
                  :value="item.pounds"
                  class="w-16 px-2 py-1 border-[1px] border-tgrey-60 font-bold rounded-[20px] text-center"
                  @blur="finishEditing(item.id, $event)"
                  @keyup.enter="finishEditing(item.id, $event)"
                />
                
              </div>


          </div>

          <!-- Price and Remove Button -->
          <div class="text-right p-4">
            <p class="text-[20px] leading-[26px] font-semibold mb-6">
              ${{ (item.product.price * item.pounds).toFixed(2) }}
            </p>
            <button
              @click="cartStore.removeFromBasket(item.id)"
              class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Remove
            </button>
          </div>

        </div>
      </div>

      <!-- Order Summary Section -->
      <div class="lg:col-span-1">
        <div class="bg-tgrey-50 rounded-lg border-[2px] border-tgrey-60 p-6">
          <h2 class="text-xl font-semibold mb-6">Order summary</h2>

          <div class="space-y-4">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>${{ subtotal.toFixed(2) }}</span>
            </div>

            <div class="flex justify-between">
              <span>Shipping</span>
              <span>${{ shipping.toFixed(2) }}</span>
            </div>

            <div class="flex justify-between">
              <span>Tax</span>
              <span>${{ tax.toFixed(2) }}</span>
            </div>

            <div class="flex justify-between font-semibold pt-4">
              <span>Total</span>
              <span>${{ total.toFixed(2) }}</span>
            </div>
          </div>

          <button
            class="w-full mt-6 px-6 py-3 bg-tgreen-100 font-inter leading-[20.8px] font-semibold text-[16px] text-white rounded-md hover:bg-green-900 transition-colors flex items-center justify-between gap-2"
          >
            <span> Continue to payment </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import { useProductStore } from '@/stores/productStore';

const cartStore = useCartStore();
const productStore = useProductStore();
const isEditing = ref({});

// Combine cart items with product details
const cartItems = computed(() => {
  return cartStore.basket.map((item) => ({
    ...item,
    product: productStore.products.find((p) => p.id === item.id),
  }));
});

// Calculate order summary values
const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => {
    return sum + item.product.price * item.pounds;
  }, 0);
});

const shipping = computed(() => 3.99);
const tax = computed(() => 2.0); // 8% tax rate
const total = computed(() => subtotal.value + shipping.value + tax.value);

const startEditing = (id) => {
  isEditing.value[id] = true;
};

// Handle finish editing
const finishEditing = (id, event) => {
  const pounds = parseFloat(event.target.value);
  if (!isNaN(pounds) && pounds > 0) {
    cartStore.addPoundsToProduct(id, pounds);
  }
  isEditing.value[id] = false;
};
</script>
