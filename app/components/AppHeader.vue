<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";

const open = ref(false);

const links = [
  { to: "/", label: "Обо мне" },
  { to: "/services", label: "Практика / Тренинги" },
  { to: "/blog", label: "Библиотека" },
  { to: "/contacts", label: "Контакты" },
];

// Группы для бургер-меню
const drawerSections = [
  {
    title: "Запись",
    items: [{ to: "/book", label: "Записаться на встречу" }],
  },
  {
    title: "Обучение",
    items: [
      { to: "/courses", label: "Онлайн-курс" },
      { to: "/materials", label: "Самостоятельные материалы" },
    ],
  },
  {
    title: "Инфо",
    items: [
      { to: "/about", label: "Обо мне" },
      { to: "/approach", label: "Как это проходит" },
      { to: "/contacts", label: "Контакты" },
    ],
  },
  {
    title: "Библиотека знаний",
    items: [{ to: "/library", label: "Все материалы" }],
  },
];

// Закрытие по Esc
const onKey = (e) => {
  if (e.key === "Escape") open.value = false;
};
onMounted(() => window.addEventListener("keydown", onKey));
onBeforeUnmount(() => window.removeEventListener("keydown", onKey));

// Блокировка скролла бэкграунда
watch(open, (v) => {
  document.documentElement.style.overflow = v ? "hidden" : "";
});
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 bg-black backdrop-blur border-b border-white/10 text-white"
  >
    <nav
      class="mx-auto px-4 sm:px-6 lg:px-32 h-16 flex items-center justify-between"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center no-underline">
        <img src="/logo.svg" alt="" class="h-10 w-10 mr-2" />
        <div class="flex leading-tight">
          <div
            class="text-xs flex flex-col text-white items-center pr-4 border-r border-white/20"
          >
            <span>Сайт</span><span>психолога</span>
          </div>
          <span class="text-xl text-white font-logo pl-4">Кораблевой М.Н.</span>
        </div>
      </NuxtLink>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-6">
        <li v-for="l in links" :key="l.to">
          <NuxtLink
            :to="l.to"
            class="transition hover:text-blue-500"
            active-class="text-yellow-300 border-b-2 border-yellow-300 pb-1 hover:text-yellow-300"
            exact-active-class="text-yellow-300 border-b-2 border-yellow-300 pb-1 hover:text-yellow-300"
          >
            {{ l.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Контакты -->
      <div class="flex items-center gap-2">
        <!-- ПК: просто номер -->
        <span class="hidden md:inline text-lg font-semibold select-all">
          +7 (999) 888-77-66
        </span>

        <!-- Мобильные: ссылка для звонка -->
        <a
          href="tel:+79998887766"
          class="md:hidden inline-flex items-center rounded-xl border border-yellow-400 px-3 py-1 hover:bg-yellow-400 hover:text-black transition"
        >
          📞 +7 (999) 888-77-66
        </a>
      </div>

      <div class="flex items-center gap-2">
        <!-- Соцсети на десктопе -->
        <a
          href="https://wa.me/..."
          class="hidden md:inline-flex"
          aria-label="WhatsApp"
        >
          <Icon name="mdi:whatsapp" class="text-3xl hover:text-[#25D366]" />
        </a>
        <a
          href="https://t.me/..."
          class="hidden md:inline-flex"
          aria-label="Telegram"
        >
          <Icon name="mdi:telegram" class="text-3xl hover:text-[#0088cc]" />
        </a>
      </div>

      <!-- Right: burger -->
      <div class="flex items-center gap-2">
        <button
          class="inline-flex items-center justify-center rounded border border-white px-3 py-2 text-white hover:bg-white/20 transition"
          @click="open = !open"
          :aria-expanded="open"
          aria-controls="site-drawer"
          aria-label="Открыть меню"
        >
          <span v-if="!open">☰</span>
          <span v-else>✕</span>
        </button>
      </div>
    </nav>
  </header>

  <!-- Overlay -->
  <div
    v-show="open"
    class="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px]"
    @click="open = false"
  />

  <!-- Drawer -->
  <aside
    id="site-drawer"
    class="fixed right-0 top-0 z-50 h-dvh w-[320px] max-w-[90vw] bg-black text-white border-l border-white/10 transition-transform duration-200 ease-out p-4 flex flex-col"
    :class="open ? 'translate-x-0' : 'translate-x-full'"
    role="dialog"
    aria-modal="true"
  >
    <div class="flex items-center justify-between h-16">
      <span class="text-sm uppercase tracking-wide text-white/70">Меню</span>
      <button
        class="p-2 rounded-lg hover:bg-white/10"
        @click="open = false"
        aria-label="Закрыть меню"
      >
        ✕
      </button>
    </div>

    <!-- Секции -->
    <nav class="mt-2 space-y-6">
      <section
        v-for="(sec, i) in drawerSections"
        :key="sec.title"
        class="border-t border-white/10 pt-4"
        :class="{ 'border-t-0 pt-0': i === 0 }"
      >
        <h3 class="text-xs uppercase tracking-wide text-white/60 mb-2">
          {{ sec.title }}
        </h3>
        <ul class="space-y-1">
          <li v-for="item in sec.items" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="block rounded-lg px-3 py-2 hover:bg-white/10 transition [&.router-link-active]:bg-white/10 [&.router-link-active]:text-yellow-300"
              @click="open = false"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </section>
    </nav>

    <!-- Соцсети -->
    <div class="mt-auto pt-4 border-t border-white/10">
      <div class="flex items-center justify-center gap-3 text-white/80">
        <a
          href="https://t.me/..."
          class="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10"
          aria-label="Telegram"
        >
          <Icon name="mdi:telegram" class="h-5 w-5" />
        </a>
        <a
          href="https://wa.me/..."
          class="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10"
          aria-label="WhatsApp"
        >
          <Icon name="mdi:whatsapp" class="h-5 w-5" />
        </a>
      </div>
    </div>
  </aside>
</template>

<style scoped>
/* Десктопный текст меню */
ul {
  font-weight: 600;
  font-size: large;
}
</style>
