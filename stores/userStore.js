import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    showModal: false,
  }),

  actions: {
    toggleModal(show) {
      this.showModal = show;
    },
  },
});
