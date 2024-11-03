import { defineStore } from 'pinia';

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Heirloom Tomatoes',
        price: 5.99,
        image: '/products/tomato.png',
        description: 'Grown in San Juan Capistrano, CA',
      },
      {
        id: 2,
        name: 'Organic Ginger',
        price: 12.99,
        image: '/products/ginger.png',
        description: 'Grown in Huntington Beach, CA',
      },
      {
        id: 3,
        name: 'Onion',
        price: 2.99,
        image: '/products/onion.png',
        description: 'Grown in Huntington Beach, CA',
      },
      {
        id: 4,
        name: '6 in 1 package',
        price: 14.99,
        image: '/products/mixedveggies.png',
        description: 'Grown in Huntington Beach, CA',
      },
      {
        id: 5,
        name: 'potatoes',
        price: 8.99,
        image: '/products/potatoes.png',
        description: 'Grown in San Juan Capistrano, CA',
      },
      {
        id: 6,
        name: 'carrot',
        price: 3.59,
        image: '/products/carrots.png',
        description: 'Grown in San Juan Capistrano, CA',
      },
    ],

    filters: {
      category: '',
      sortBy: 'name',
    },
  }),

  getters: {
    sortedProducts(state) {
      // Create a fresh copy of the products array to avoid in-place mutation
      let sorted = [...state.products];

      // Apply sorting based on the value of `sortBy`
      if (state.filters.sortBy === 'a-z') {
        sorted = [...state.products];
        const atoz = sorted.sort((a, b) => a.name.localeCompare(b.name));

        return atoz;
      }

      if (state.filters.sortBy === 'z-a') {
        sorted = [...state.products];
        const ztoa = sorted.sort((a, b) => b.name.localeCompare(a.name));
        return ztoa;
      }

      // Return the unsorted array if no sorting filter is applied
      return state.products;
    },
  },

  actions: {
    setSortBy(sortType) {
      this.filters.sortBy = sortType;
    },

    removeFromBasket(productId) {
      // Implementation for removing from basket
    },

    addToBasket(productId) {
      // Implementation for adding to basket
    },
  },
});
