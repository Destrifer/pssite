<script setup>
const props = defineProps({
  label: { type: String, required: true },
  to: { type: String, default: null },
  ariaLabel: { type: String, default: null },
  size: { type: String, default: "md" }, // sm | md | lg
});

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-8 py-3 text-base",
  lg: "px-10 py-4 text-lg",
};

const base =
  "relative inline-flex items-center justify-center rounded-xl " +
  "font-medium text-white backdrop-blur-md bg-white/10 border border-white/20 " +
  "shadow-md transition-all duration-300 " +
  "hover:bg-yellow-400 hover:text-black hover:border-yellow-400 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300/50";
</script>

<template>
  <!-- NuxtLink -->
  <NuxtLink
    v-if="to"
    :to="to"
    :aria-label="ariaLabel || label"
    :class="[base, sizeClasses[size]]"
  >
    <slot>{{ label }}</slot>
  </NuxtLink>

  <!-- Button -->
  <button
    v-else
    type="button"
    :aria-label="ariaLabel || label"
    :class="[base, sizeClasses[size]]"
  >
    <slot>{{ label }}</slot>
  </button>
</template>
