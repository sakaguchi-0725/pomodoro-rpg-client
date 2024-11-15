<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, defineProps, defineEmits, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import defaultImage from '@/app/assets/img/default-profile.png'
import { Account } from '@/entities/account';

const props = defineProps<{
  account: Account | undefined
}>()

defineEmits<{
  logout: []
}>()

const isMenuOpen = ref(false)
const imageSrc = computed(() => {
  return props.account?.image || defaultImage
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.menu-container')) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4 md:justify-start md:space-x-10">
        <!-- ロゴ -->
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <RouterLink to="/" class="text-indigo-600 font-bold text-xl">
            PomodoroRPG
          </RouterLink>
        </div>

        <!-- ナビゲーションリンク - モバイルでは非表示、mdスクリーン以上で表示 -->
        <nav class="hidden md:flex space-x-10">
          <RouterLink to="/pomodoro" class="text-sm text-gray-500 hover:text-gray-900">Pomodoro</RouterLink>
          <RouterLink to="/character" class="text-sm text-gray-500 hover:text-gray-900">Character</RouterLink>
          <RouterLink to="/report" class="text-sm text-gray-500 hover:text-gray-900">Report</RouterLink>
        </nav>

        <!-- ユーザープロフィールとハンバーガーメニュー -->
        <div class="flex items-center justify-end md:flex-1 lg:w-0">
          <!-- ユーザープロフィール - モバイルでは非表示、mdスクリーン以上で表示 -->
          <div class="hidden md:flex items-center space-x-4">
            <span class="text-sm font-medium text-gray-700">{{ props.account?.name }}</span>
            <img
              class="h-8 w-8 rounded-full"
              :src="imageSrc"
              alt="User profile"
            />
          </div>

          <!-- ハンバーガーメニューボタン -->
          <div class="flex items-center md:ml-6 relative">
            <button
              type="button"
              class="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              @click.stop="toggleMenu"
            >
              <span class="sr-only">Open menu</span>
              <component :is="isMenuOpen ? XMarkIcon : Bars3Icon" class="h-6 w-6" aria-hidden="true" />
            </button>
            <div v-if="isMenuOpen" class="hidden md:block absolute right-0 top-full mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10 animate-slide-in-fwd-center">
              <div class="px-2 pt-2 pb-3 space-y-1">
                <RouterLink to="/profile" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Profile</RouterLink>
                <button @click="$emit('logout')" href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- モバイルメニュー、メニューの状態に応じて表示/非表示 -->
    <div v-if="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <RouterLink to="/pomodoro" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Pomodoro</RouterLink>
        <RouterLink to="/character" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Character</RouterLink>
        <RouterLink to="/report" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Report</RouterLink>
        <RouterLink to="/profile" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Profile</RouterLink>
        <button @click="$emit('logout')" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Logout</button>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-5">
          <img
            class="h-10 w-10 rounded-full"
            :src="imageSrc"
            alt="User profile"
          />
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">{{ props.account?.name }}</div>
            <div class="text-sm font-medium text-gray-500">{{ props.account?.email }}</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

