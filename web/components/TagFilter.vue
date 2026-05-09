<script setup lang="ts">
defineProps<{
  tags: string[]
  selected: string | null
}>()

const emit = defineEmits<{
  (e: 'select', tag: string | null): void
}>()
</script>

<template>
  <div class="filter-bar">
    <button
      class="tag"
      :class="{ active: selected === null }"
      type="button"
      @click="emit('select', null)"
    >
      All
    </button>
    <button
      v-for="t in tags"
      :key="t"
      class="tag"
      :class="{ active: selected === t }"
      type="button"
      @click="emit('select', t)"
    >
      {{ t }}
    </button>
  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  gap: 6px;
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
  flex-wrap: wrap;
}
.tag {
  display: inline-block;
  padding: 4px 10px;
  background: #f3f4f6;
  color: #374151;
  border: none;
  border-radius: 999px;
  font-size: 12px;
  cursor: pointer;
  font-weight: 500;
  font-family: inherit;
}
.tag:hover {
  background: #e5e7eb;
}
.tag.active {
  background: #111;
  color: #fff;
}
</style>
