<script setup lang="ts">
import { Account, fetchAccount } from '@/entities/account'
import { useAccount } from '@/entities/account/lib/useAccount'
import { isAuthenticated } from '@/entities/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { provideAccount } = useAccount()
const account = ref<Account>()
provideAccount(account)

router.beforeEach(async (to) => {
  account.value = undefined

  if (to.meta.isLogedin) {
    const isAuth = await isAuthenticated()

    if (!isAuth) {
      return { name: 'login' }
    }

    const { data, error } = await fetchAccount()
    if (error) {
      alert(error)
      return { name: 'login' }
    }

    if (!data) {
      alert('アカウント情報の取得に失敗しました')
      return { name: 'login' }
    }
    account.value = data

    return true
  }

  return true
})
</script>

<template>
  <slot></slot>
</template>