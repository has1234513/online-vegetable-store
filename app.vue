<template>
  <div class="">
    <Header />
    <MyProfile/>
    <NuxtPage />
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

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

onMounted(() => {
  try {
    const loggedIn = getCookie('loggedIn');

    if (loggedIn && loggedIn === 'true') {
      if (route.path === '/login') {
        router.push('/home');
      }
    } else {
      router.push('/');
    }
  } catch (error) {
    console.error('Error loading saved credentials:', error);
  }
});
</script>
