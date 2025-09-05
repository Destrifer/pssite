<script setup>
useSeoMeta({ title: "Главная" });

const videos = [
  {
    key: "fireplace",
    mp4: "/video/fireplace.mp4",
    webm: "/video/fireplace.webm",
    title: "Самое большое бремя — не иметь возможности высказаться.",
    subtitle: "Зигмунд Фрейд",
    poster: "",
  },
  {
    key: "forest",
    mp4: "/video/forest.mp4",
    webm: "/video/forest.webm",
    title:
      "Всегда обращай свой лик к солнцу — и тени будут падать позади тебя.",
    subtitle: "Уолт Уитмен",
    poster: "",
  },
  {
    key: "room",
    mp4: "/video/room.mp4",
    webm: "/video/room.webm",
    title: "Ваш дом там, где можно быть самим собой.",
    subtitle: "Карл Роджерс",
    poster: "",
  },
  {
    key: "wood",
    mp4: "/video/wood.mp4",
    webm: "/video/wood.webm",
    title: "Тот, кто смотрит внутрь — пробуждается.",
    subtitle: "Карл Густав Юнг",
    poster: "",
  },
];

// 1) Выбираем индекс на сервере и сохраняем в состояние Nuxt
// Вариант A: случайный
const heroIdx = useState("heroIdx", () =>
  Math.floor(Math.random() * videos.length)
);
// Вариант B (детерминированно по дню): (Date.now()/86400000)|0 % videos.length
const current = computed(() => videos[heroIdx.value]);
</script>

<template>
  <section
    class="relative isolate min-h-[calc(100dvh-4rem)] flex items-center bg-black"
  >
    <VideoBg
      :src-mp4="current.mp4"
      :src-webm="current.webm"
      :poster="current.poster || ''"
      :overlay="0.45"
      preload="auto"
    />
    <div
      class="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-black/55 via-black/25 to-transparent"
    />

    <div
      class="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-white"
    >
      <h1 class="font-serif text-4xl/tight sm:text-6xl max-w-4xl drop-shadow">
        {{ current.title }}
      </h1>
      <p class="mt-4 max-w-xl text-white/85">
        {{ current.subtitle }}
      </p>

      <div class="mt-8">
        <AppButton label="Записаться на встречу" to="/book" />
      </div>

      <div class="mt-3 text-xs text-white/70">
        Онлайн и очно · 50 минут · конфиденциально
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-family: "Caveat", cursive;
}
</style>
