<script setup lang="ts">
import { InternalServerError } from "@/pages/errors"
import ErrorBoundary from "vue-error-boundary"
</script>

<template>
  <ErrorBoundary :fall-back="InternalServerError">
    <template #boundary>
      <slot></slot>
    </template>
  </ErrorBoundary>
</template>