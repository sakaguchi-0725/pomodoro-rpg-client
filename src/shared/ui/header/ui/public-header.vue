<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- ロゴ -->
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <RouterLink to="/" class="text-indigo-600 font-bold text-xl">
            PomodoroRPG
          </RouterLink>
        </div>

        <!-- ボタンを右側に固定 -->
        <div class="flex items-center space-x-4 md:flex-1 justify-end">
          <RouterLink to="/login" class="text-sm font-medium text-gray-700 hover:text-gray-900">
            ログイン
          </RouterLink>
          <RouterLink to="/signup" class="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md">
            会員登録
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

