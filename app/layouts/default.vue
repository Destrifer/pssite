<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <!-- Полоса загрузки при навигации -->
  <NuxtLoadingIndicator />

  <div class="min-h-dvh flex flex-col bg-white text-neutral-900">
    <!-- Шапка. Если у тебя фиксированная — оставь фикс в AppHeader -->
    <header>
      <AppHeader />
    </header>

    <!-- Контент -->
    <main class="flex-1 w-full h-full pt-16">
      <slot />
    </main>

    <!-- Футер (липкий за счёт flex-раскладки) -->
    <footer>
      <AppFooter :year="year" />
    </footer>
  </div>
</template>
