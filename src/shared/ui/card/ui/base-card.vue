<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  label: string
}>()
</script>

<template>
  <div class="rounded border border-gray-300 flex flex-col w-full p-6">
    <h1 class="font-semibold text-2xl mb-6">{{ props.label }}</h1>
    <slot></slot>
  </div>
</template>