// /composables/useVideoRotation.js
export const useVideoRotation = (items, storageKey = "videoQueue:v1") => {
  const current = ref(null);
  const QUEUE_KEY = storageKey;
  const LAST_KEY = `${storageKey}:last`;

  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  onMounted(() => {
    const keys = items.map((i) => i.key);
    let queue = [];
    let lastShown = null;

    try {
      queue = JSON.parse(localStorage.getItem(QUEUE_KEY) || "[]");
    } catch {}
    try {
      lastShown = JSON.parse(localStorage.getItem(LAST_KEY) || "null");
    } catch {}

    // Валидируем очередь (вдруг список изменился)
    queue = queue.filter((k) => keys.includes(k));

    if (queue.length === 0) {
      queue = shuffle(keys);

      // Защита от повтора на границе циклов
      if (lastShown && queue.length > 1 && queue[0] === lastShown) {
        const swapIndex = 1 + Math.floor(Math.random() * (queue.length - 1));
        [queue[0], queue[swapIndex]] = [queue[swapIndex], queue[0]];
      }
    }

    const nextKey = queue.shift();
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
    if (nextKey != null)
      localStorage.setItem(LAST_KEY, JSON.stringify(nextKey));

    current.value = items.find((i) => i.key === nextKey) || items[0] || null;
  });

  return { current };
};
