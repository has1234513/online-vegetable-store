// stores/productStore.js
import { defineStore } from 'pinia';

export const useProductStore = defineStore('products', {
  state: () => ({
    basket: [
      
    ],
  }),

  getters: {
  },

  actions: {
 
    addPoundsToProduct(id, pounds) {
        const item =  state.basket.find(p => p.id === id)
        item.pounds = (item.pounds + pounds)
    },

    removeFromBasket(id) {
        state.basket.filter(obj => obj.id !== id);
    },

    addToBasket(product) {
        state.basket.push({
            id: product.id,
            pounds: 1
        })
    },
  },
});
