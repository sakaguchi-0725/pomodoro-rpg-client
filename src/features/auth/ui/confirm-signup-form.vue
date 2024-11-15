<script setup lang="ts">
import { TextInput } from '@/shared/ui/input';
import { useConfirmSignup } from '../hooks/use-confirm-signup';

const { defineField, errors, errorMessage, onSubmit, toSignupPage } = useConfirmSignup()

const [email, emailProps] = defineField('email')
const [code, codeProps] = defineField('confirmationCode')
</script>

<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" @submit="onSubmit">
      <TextInput
        id="email"
        type="email"
        placeholder="test@example.com"
        :error-message="errors.email"
        v-model="email"
        v-bind="emailProps"
      >メールアドレス</TextInput>

      <TextInput
        id="code"
        type="text"
        :error-message="errors.confirmationCode"
        v-model="code"
        v-bind="codeProps"
      >確認コード</TextInput>

      <div>
        <span v-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">登録</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      <span @click="toSignupPage" class="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">もどる</span>
    </p>
  </div>
</template>