<script setup lang="ts">
import './assets/css/styles.css'
import { RouterView, useRoute } from 'vue-router'
import AppProvider from './provider/app-provider.vue'
import { computed } from 'vue'
import AuthProvider from './provider/auth-provider.vue';

const route = useRoute()
const layout = computed(() => {
  return route.meta.layout ?? 'slot'
})
</script>

<template>
  <AppProvider>
    <AuthProvider>
      <component :is="layout">
        <RouterView />
      </component>
    </AuthProvider>
  </AppProvider>
</template>
