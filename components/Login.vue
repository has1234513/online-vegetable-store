<template>
    <main class="min-h-screen bg-white py-12 px-4">
      <div class="max-w-md mx-auto">
        <div class="bg-green-800 rounded-lg p-8 shadow-md">
          <h2 class="text-2xl font-bold text-white mb-6">Sign In</h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="username" class="block text-white mb-2">Username</label>
              <input
                id="username"
                v-model="username"
                type="text"
                class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Username"
              />
            </div>
            
            <div>
              <label for="password" class="block text-white mb-2">Password</label>
              <input
                id="password"
                v-model="password"
                type="password"
                class="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Password"
              />
            </div>
            
            <div class="flex items-center">
              <input
                id="remember"
                v-model="rememberMe"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label for="remember" class="ml-2 text-white">Remember me</label>
            </div>
            
            <button
              type="submit"
              class="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-800 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Login
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const username = ref('')
  const password = ref('')
  const rememberMe = ref(false)
  
  const handleSubmit = () => {
    // Add login logic here
    console.log({
      username: username.value,
      password: password.value,
      rememberMe: rememberMe.value
    })
  }
  </script>