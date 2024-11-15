<script setup lang="ts">
import { TextInput } from '@/shared/ui/input'
import { useForgotPassword } from '../hooks/use-forgot-password'


const { defineField, errors, errorMessage, onSubmit, toLoginPage } = useForgotPassword()

const [email, emailProps] = defineField('email')
</script>

<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" @submit="onSubmit">
      <TextInput
        id="email"
        type="email"
        placeholder="test@example.com"
        v-model="email"
        v-bind="emailProps"
        :error-message="errors.email"
      >メールアドレス</TextInput>

      <div>
        <span v-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">再設定メールを送信</button>
      </div>
    </form>
    <p class="mt-5 text-center text-sm">
      <span @click="toLoginPage" class="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">もどる</span>
    </p>
  </div>
</template>