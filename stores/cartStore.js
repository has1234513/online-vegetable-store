import { defineStore } from 'pinia';

export const useCartStore = defineStore('basket', {
  state: () => ({
    basket: [],
  }),

  getters: {
    isInBasket: (state) => (id) => {
      return state.basket.some((product) => product.id === id);
    },
  },

  actions: {
    addPoundsToProduct(id, pounds) {
      const item = this.basket.find(p => p.id === id);
      if (item) {
        item.pounds += pounds;
      }
    },

    removeFromBasket(id) {
      this.basket = this.basket.filter(obj => obj.id !== id);
    },

    addToBasket(id) {
        console.log("adding to basket")
      this.basket.push({
        id: id,
        pounds: 1
      });
    },
  },
});
