<script setup lang="ts">
import { PasswordInput, TextInput } from '@/shared/ui/input'
import { useConfirmForgotPassword } from '../hooks/use-confirm-forgot-password'


const { defineField, errors, errorMessage, onSubmit, toForgotPassword } = useConfirmForgotPassword()

const [email, emailProps] = defineField('email')
const [code, codeProps] = defineField('confirmationCode')
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

      <TextInput
        id="code"
        type="text"
        v-model="code"
        v-bind="codeProps"
        :error-message="errors.confirmationCode"
      >確認コード</TextInput>

      <PasswordInput
        id="password"
        :is-forgot-link="false"
        v-model="password"
        v-bind="passwordProps"
        :error-message="errors.password"
      >パスワード</PasswordInput>

      <div>
        <span v-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">パスワードを更新</button>
      </div>
    </form>
    <p class="mt-5 text-center text-sm">
      <span @click="toForgotPassword" class="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">もどる</span>
    </p>
  </div>
</template>