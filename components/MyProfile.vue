<!-- components/LogoutModal.vue -->
<template>
    <transition
      enter-active-class="ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div 
          class="bg-white rounded-lg p-6 max-w-sm w-full mx-4 relative"
          @click.stop
        >
          <h3 class="text-lg font-semibold mb-4">My Profile</h3>
          <button 
            @click="logout"
            class="w-full py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors mb-3"
          >
            Logout
          </button>
          <button 
            @click="$emit('close')"
            class="w-full py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true
    }
  })
  
  const emit = defineEmits(['close'])
  
  const logout = () => {
    // Add your logout logic here
    console.log('Logging out...')
    // After logout, close the modal
    emit('close')
  }
  </script>