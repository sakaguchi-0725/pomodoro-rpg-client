<script setup lang="ts">
import { useAccount } from '@/entities/account/lib/useAccount';
import { signOut } from '@/entities/auth';
import { PrivateHeader } from '@/shared/ui/header'

const { injectAccount } = useAccount()
const account = injectAccount()

const handleClick = async () => {
  const error = await signOut()

  if (error) {
    alert(error)
  }
}
</script>

<template>
  <PrivateHeader :account="account" @logout="handleClick" />
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col items-center pt-5 justify-center lg:pt-10 space-y-4 md:space-y-5">
      <RouterView />
    </div>
  </div>
</template>