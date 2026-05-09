<script setup lang="ts">
import type { Talk } from '~/types/talk'

defineProps<{ talk: Talk }>()

function formatDate(iso: string): string {
  // 2025-08-23 → "Aug 2025"
  const [y, m] = iso.split('-')
  const month = new Date(`${iso}T00:00:00Z`).toLocaleString('en-US', {
    month: 'short',
    timeZone: 'UTC',
  })
  return `${month} ${y}`
}
</script>

<template>
  <a :href="talk.url" class="talk-row">
    <div class="title">{{ talk.title }}</div>
    <div class="description">{{ talk.description }}</div>
    <div class="meta">
      <span v-for="t in talk.tags" :key="t" class="tag">{{ t }}</span>
      <span class="event">· {{ talk.event }} · {{ formatDate(talk.date) }}</span>
    </div>
  </a>
</template>

<style scoped>
.talk-row {
  display: block;
  padding: 14px 0;
  border-bottom: 1px solid #eee;
  text-decoration: none;
  color: inherit;
}
.talk-row:hover .title {
  text-decoration: underline;
}
.title {
  font-size: 16px;
  color: #111;
  font-weight: 600;
  margin-bottom: 4px;
}
.description {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin-bottom: 6px;
}
.meta {
  font-size: 12px;
  color: #888;
}
.tag {
  display: inline-block;
  padding: 2px 8px;
  background: #eef2ff;
  color: #4338ca;
  border-radius: 999px;
  font-size: 11px;
  margin-right: 4px;
  font-weight: 500;
}
.event {
  margin-left: 4px;
}
</style>
