<!-- pages/book.vue -->
<script setup>
import { ref, onMounted, nextTick } from "vue";

// Страница только на клиенте (исключаем любые 500 из-за SSR)
definePageMeta({ title: "Запись", ssr: false });

const el = ref(null); // контейнер под виджет
const NAMESPACE = "test"; // латиницей
const CAL_LINK = "korableva/test";

onMounted(async () => {
  // ждём, чтобы ref точно появился в DOM
  await nextTick();

  // На всякий случай очищаем контейнер (чтобы при HMR/повторном заходе не было дублей)
  el.value.innerHTML = "";

  // ОРИГИНАЛЬНЫЙ СНИППЕТ (стаб) — но запускаем его только на клиенте и после mount
  (function (C, A, L) {
    let p = function (a, ar) {
      a.q.push(ar);
    };
    let d = C.document;
    C.Cal =
      C.Cal ||
      function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      };
  })(window, "https://app.cal.com/embed/embed.js", "init");

  // ДАЛЕЕ — вызовы ровно как в твоём коде, но с ref-элементом
  window.Cal("init", NAMESPACE, { origin: "https://app.cal.com" });

  window.Cal.ns[NAMESPACE]("inline", {
    elementOrSelector: el.value, // ← ключевой момент: передаём сам DOM-узел
    config: { layout: "month_view" },
    calLink: CAL_LINK,
  });

  window.Cal.ns[NAMESPACE]("ui", {
    cssVarsPerTheme: {
      light: { "cal-brand": "#292929" },
      dark: { "cal-brand": "#fafafa" },
    },
    hideEventTypeDetails: true, // ← как в исходнике
    layout: "month_view",
  });
});
</script>

<template>
  <!-- Без overflow:scroll; даём нормальную высоту -->
  <div ref="el" style="width: 100%; min-height: 820px"></div>
</template>
