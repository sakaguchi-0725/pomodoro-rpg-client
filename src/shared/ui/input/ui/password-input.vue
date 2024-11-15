<script setup lang="ts">
import { defineProps, defineModel, computed, ref } from 'vue'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router';

const props = defineProps<{
  id: string
  errorMessage?: string
  isForgotLink: boolean
}>()

const model = defineModel<string | undefined>({ required: true })

const classes = computed(() => [
  "block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
  props.errorMessage ? "ring-red-500 focus:ring-red-500" : "ring-gray-300 focus:ring-indigo-600"
])

const isPasswordVisible = ref(false)
const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <label :for="props.id" class="block text-sm font-medium leading-6 text-gray-900"><slot></slot></label>
      <div v-if="props.isForgotLink" class="text-sm">
        <RouterLink to="/forgot-password" class="font-semibold text-indigo-600 hover:text-indigo-500">パスワードをお忘れですか?</RouterLink>
      </div>
    </div>
    <div class="relative">
      <input
        :id="props.id"
        :type="isPasswordVisible ? 'text' : 'password'"
        v-model="model"
        :class="classes"
        v-bind="$attrs"
      />
      <button
        type="button"
        @click="togglePasswordVisibility"
        class="absolute inset-y-0 right-2 flex items-center text-gray-500 focus:outline-none"
      >
        <component :is="isPasswordVisible ? EyeSlashIcon : EyeIcon" class="h-5 w-5" />
      </button>
    </div>
    <span v-if="props.errorMessage" class="text-red-500">{{ props.errorMessage }}</span>
  </div>
</template>
