<script setup lang="ts">
import { ConfirmForgotPasswordForm } from '@/features/forgot-password';
</script>

<template>
  <div class="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">パスワード再設定</h2>
    </div>

    <ConfirmForgotPasswordForm />
  </div>
</template>