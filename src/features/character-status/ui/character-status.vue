<script setup lang="ts"></script>

<template>
  <div class="border border-gray-200 rounded-md shadow-sm flex flex-col items-center w-full sm:w-3/5 md:w-3/5 lg:w-1/2 overflow-hidden">
    <div class="w-full flex justify-center h-80 border-gray-200 relative">
      <!-- 背景画像 -->
      <img src="../../../app/assets/img/bg-sample.jpg" alt="background" class="absolute top-0 left-0 w-full h-full object-cover opacity-75 z-0" />

      <!-- キャラクター画像 -->
      <img src="../../../app/assets/img/swordsman.png" alt="swordsman" class="relative z-10 object-cover max-h-56 mt-20" />
    </div>

    <!-- キャラクター情報 -->
    <div class="w-full border-t border-gray-200 py-4 px-6">
      <div class="flex justify-between items-center">
        <p class="text-lg font-medium">剣士</p>
        <p class="text-lg font-medium">レベル: 5</p>
      </div>
      <div class="mt-4">
        <div class="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
          <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 45%"></div>
        </div>
      </div>
    </div>
  </div>
</template>