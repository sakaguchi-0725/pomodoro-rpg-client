<script setup lang="ts">
import { PasswordInput, TextInput } from '@/shared/ui/input'
import { useLogin } from '../hooks/use-login'

const { defineField, errors, errorMessage, onSubmit, toSignupPage } = useLogin()

const [email, emailProps] = defineField('email')
const [password, passwordProps] = defineField('password')
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

      <PasswordInput
        id="password"
        :error-message="errors.password"
        :is-forgot-link="true"
        v-model="password"
        v-bind="passwordProps"
      >パスワード</PasswordInput>

      <div>
        <span v-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">ログイン</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      アカウントをお持ちでない方は
      <span @click="toSignupPage" class="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">こちら</span>
    </p>
  </div>
</template>