<script setup lang="ts">
import { PublicHeader } from '@/shared/ui/header';
import { RouterView } from 'vue-router'
</script>

<template>
  <PublicHeader />
  <div class="flex justify-center items-center mx-auto max-w-screen-xl mt-4 sm:p-2">
    <RouterView />
  </div>
</template>