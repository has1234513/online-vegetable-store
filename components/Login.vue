<template>
  <main class="h-[calc(100vh-120px)] bg-twhite flex font-inter px-[20px]">
    <div class="w-[553px] m-auto">
      <div
        class="bg-tgreen-100 rounded-[16px] p-6 shadow-md"
      >
        <h2 class="text-[20px] font-semibold text-twhite-100 mb-6">Sign In</h2>

        <form @submit.prevent="handleSubmit" class="space-y-3">
          <div>
            <label
              for="username"
              class="block text-twhite-100 mb-2 t-normal-text"
              >Username</label
            >
            <input
              id="username"
              v-model="username"
              type="text"
              class="w-full px-3 py-2 text-[16px] t-normal-text rounded-md border focus:outline-none focus:ring-2 focus:ring-tgreen-50"
              placeholder="Username"
            />
          </div>

          <div>
            <label
              for="password"
              class="block text-twhite-100 mb-2 t-normal-text"
              >Password</label
            >
            <input
              id="password"
              v-model="password"
              type="password"
              class="w-full px-3 py-2 t-normal-text rounded-md border focus:outline-none focus:ring-2 focus:ring-tgreen-50"
              placeholder="Password"
            />
          </div>

          <div class="flex items-center">
            <input
              id="remember"
              v-model="rememberMe"
              @change="handleRememberMeChange"
              type="checkbox"
              class="h-4 w-4 rounded text-tgreen-50 focus:ring-tgreen-50"
            />
            <label for="remember" class="ml-2 text-twhite-100 t-normal-text"
              >Remember me</label
            >
          </div>

          <button
            type="submit"
            class="w-[128px] ml-auto flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-[16px] font-semibold text-tgreen-100 bg-twhite-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tgreen-50"
          >
            Login
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
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();

const username = ref('');
const password = ref('');
const name = ref('');
const rememberMe = ref(false);
const loginSuccess = ref(false);

// Cookie utility functions
const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  const securePart = window.location.protocol === 'https:' ? '; secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/; samesite=strict${securePart}`;
};

const getCookie = (name) => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
};

const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; samesite=strict`;
};

const encrypt = (text) => {
  return btoa(text).split('').reverse().join('');
};

const decrypt = (encoded) => {
  try {
    return atob(encoded.split('').reverse().join(''));
  } catch {
    return '';
  }
};

onMounted(() => {
  try {
    const savedUsername = getCookie('rememberedUsername');
    const savedPassword = getCookie('rememberedPassword');
    const savedRememberMe = getCookie('rememberMe') === 'true';

    if (savedRememberMe && savedUsername && savedPassword) {
      username.value = decrypt(savedUsername);
      password.value = decrypt(savedPassword);
      rememberMe.value = true;
    }
  } catch (error) {
    console.error('Error loading saved credentials:', error);
    clearStoredCredentials();
  }
});

const clearStoredCredentials = () => {
  deleteCookie('rememberedUsername');
  deleteCookie('rememberedPassword');
  deleteCookie('rememberMe');
};

const handleRememberMeChange = () => {
  if (!rememberMe.value) {
    clearStoredCredentials();
  }
};

const handleSubmit = async () => {
  try {
    if (rememberMe.value) {
      setCookie('rememberedUsername', encrypt(username.value), 30);
      setCookie('rememberedPassword', encrypt(password.value), 30);
      setCookie('rememberMe', 'true', 30);
    } else {
      clearStoredCredentials();
    }

    // Call the backend API to save the login data
    const response = await fetch(config.public.apiLoginEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
        rememberMe: rememberMe.value,
      }),
    });

    const result = await response.json();
    if (result.success) {
      loginSuccess.value = true;
      console.log('Login successful');
    } else {
      console.error('Login failed:', result.message);
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};
</script>
