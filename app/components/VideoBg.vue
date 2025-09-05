<script setup>
defineProps({
  srcMp4: { type: String, required: true },
  srcWebm: { type: String, default: "" },
  poster: { type: String, default: "" },
  overlay: { type: Number, default: 0.35 },
});
</script>

<template>
  <!-- Никаких отрицательных z; это фон секции -->
  <div class="absolute inset-0 z-0 overflow-hidden">
    <video
      class="h-full w-full object-cover"
      :poster="poster || undefined"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      aria-hidden="true"
    >
      <source v-if="srcWebm" :src="srcWebm" type="video/webm" />
      <source :src="srcMp4" type="video/mp4" />
    </video>

    <!-- Вуаль поверх видео, но не перехватывает клики -->
    <div
      class="pointer-events-none absolute inset-0"
      :style="{
        background: `linear-gradient(to bottom, rgba(0,0,0,${overlay + 0.15}) 0%, rgba(0,0,0,${overlay}) 40%, rgba(0,0,0,${overlay}) 100%)`,
      }"
    />
  </div>
</template>
