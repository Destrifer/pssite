<script setup>
const menuCol1 = [
  { to: "/book", label: "Записаться на встречу" },
  { to: "/approach", label: "Как это проходит" },
  { to: "/about", label: "Обо мне" },
  { to: "/contacts", label: "Контакты" },
];

const menuCol2 = [
  { to: "/library", label: "Библиотека знаний" },
  { to: "/courses", label: "Курсы и тренинги" },
  { to: "/materials", label: "Самостоятельные материалы" },
  { to: "/newsletter", label: "Рассылка / обновления" },
];
</script>

<template>
  <footer class="bg-black text-white border-t border-white/10">
    <!-- Верхняя зона -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-1 md:grid-cols-[1fr,2fr,auto] gap-8">
        <!-- Левая колонка: лого + имя + манифест -->
        <div class="space-y-4">
          <NuxtLink to="/" class="inline-flex items-center gap-3 no-underline">
            <img src="/logo.svg" alt="" class="h-10 w-10" />
            <div class="leading-tight">
              <div class="text-lg font-semibold">Кораблева М.Н.</div>
              <div class="text-xs text-white/70">практикующий психолог</div>
            </div>
          </NuxtLink>
          <p class="text-sm text-white/80">
            Помогаю справляться с тревогой, выгоранием и кризисами. Мягко,
            бережно, без навязчивых методик.
          </p>
        </div>

        <!-- Центр: меню 2 колонки по 4 -->
        <nav class="grid grid-cols-2 gap-6" aria-label="Footer navigation">
          <ul class="space-y-2">
            <li v-for="item in menuCol1" :key="item.to">
              <NuxtLink :to="item.to" class="text-sm text-white/80">{{
                item.label
              }}</NuxtLink>
            </li>
          </ul>
          <ul class="space-y-2">
            <li v-for="item in menuCol2" :key="item.to">
              <NuxtLink :to="item.to" class="text-sm text-white/80">{{
                item.label
              }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Правая колонка: 1 ряд иконок, ниже почта + запись -->
        <div class="flex flex-col items-start md:items-end gap-4">
          <!-- Иконки соцсетей в один ряд -->
          <div class="flex items-center gap-4">
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
            <a
              href="https://t.me/..."
              class="hidden md:inline-flex"
              aria-label="Telegram"
            >
              <Icon name="mdi:vk" class="text-3xl hover:text-[#0077FF]" />
            </a>
            <a
              href="https://t.me/..."
              class="hidden md:inline-flex"
              aria-label="Telegram"
            >
              <Icon name="mdi:youtube" class="text-3xl hover:text-[#FF0000]" />
            </a>
          </div>

          <!-- Почта и ссылка на запись -->
          <div class="text-sm space-y-2 md:text-right">
            <a href="mailto:hello@example.com" class="block text-white/80">
              hello@example.com
            </a>
            <AppButton label="Записаться на встречу" to="/book" size="sm" />
          </div>
        </div>
      </div>
    </div>

    <!-- Нижняя линия -->
    <div class="border-t border-white/10">
      <div
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-white/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
      >
        <div>© 2025 Кораблева М.Н.</div>
        <NuxtLink to="/policy">Политика конфиденциальности</NuxtLink>
      </div>
    </div>
  </footer>
</template>
