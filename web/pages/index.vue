<script setup lang="ts">
const { allTags, selectedTag, filteredTalks } = useTalks()

useHead({
  title: "Eric's Talks",
  meta: [
    { name: 'description', content: '個人簡報作品集' },
  ],
})
</script>

<template>
  <main class="container">
    <header class="page-header">
      <h1>Eric's Talks</h1>
      <p class="subtitle">A collection of past presentations</p>
    </header>

    <TagFilter
      :tags="allTags"
      :selected="selectedTag"
      @select="(t) => (selectedTag = t)"
    />

    <div v-if="filteredTalks.length === 0" class="empty">
      <p>沒有符合條件的 talk。</p>
      <button class="clear" type="button" @click="selectedTag = null">清除篩選</button>
    </div>

    <div v-else>
      <TalkRow v-for="talk in filteredTalks" :key="talk.slug" :talk="talk" />
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 720px;
  margin: 60px auto;
  padding: 0 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #111;
}
.page-header {
  margin-bottom: 28px;
}
.page-header h1 {
  font-size: 28px;
  margin: 0 0 6px;
  font-weight: 700;
}
.subtitle {
  font-size: 14px;
  color: #666;
  margin: 0;
}
.empty {
  text-align: center;
  padding: 40px 0;
  color: #888;
}
.clear {
  margin-top: 12px;
  padding: 8px 16px;
  background: #111;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
