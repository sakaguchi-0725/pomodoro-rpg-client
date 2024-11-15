<script setup lang="ts">
import { PasswordInput, TextInput } from '@/shared/ui/input'
import { useSignup } from '../hooks/use-signup'

const { defineField, errors, errorMessage, onSubmit, toLoginPage } = useSignup()

const [name, nameProps] = defineField('name')
const [email, emailProps] = defineField('email')
const [password, passwordProps] = defineField('password')
</script>

<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" @submit="onSubmit">
      <TextInput
        id="name"
        type="text"
        placeholder="テスト太郎"
        :error-message="errors.name"
        v-model="name"
        v-bind="nameProps"
      >ユーザー名</TextInput>

      <TextInput
        id="email"
        type="email"
        placeholder="test@example.com"
        :error-message="errors.email"
        v-model="email"
        v-bind="emailProps"
      >メールアドレス</TextInput>

      <PasswordInput
        id="password"
        :error-message="errors.password"
        :is-forgot-link="false"
        v-model="password"
        v-bind="passwordProps"
      >パスワード</PasswordInput>

      <div>
        <span v-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">登録</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      アカウントをお持ちの方は
      <span @click="toLoginPage" class="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">こちら</span>
    </p>
  </div>
</template>