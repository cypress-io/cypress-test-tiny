<script setup lang="ts">
import { Dropdown as VDropdown } from 'floating-vue'
</script>

<template>
  <VDropdown>
    <button data-cy="menu-trigger">Account</button>
    <template #popper>
      <a data-cy="menu-item-profile" href="#">Profile</a>
      <a data-cy="menu-item-settings" href="#">Settings</a>
    </template>
  </VDropdown>
</template>
