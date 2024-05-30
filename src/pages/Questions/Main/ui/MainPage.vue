<script setup lang="ts">
import QuestionsNavigationMenu from './QuestionsNavigationMenu.vue'
</script>

<template>
  <div class="bg-gray-100 flex h-screen gap-5">
    <!-- НАВИГАЦИОННОЕ МЕНЮ -->
    <QuestionsNavigationMenu />
    <!-- ДОЧЕРНИЕ СТРАНИЦЫ -->
    <div class="h-screen flex-grow p-5">
      <RouterView />
    </div>
  </div>
</template>
