<template>
  <template v-if="$slidev.nav.currentLayout !== 'cover'">
    <div
      v-if="$slidev.nav.currentLayout !== 'section'"
      class="absolute top-0 left-0 right-0 z-10 pointer-events-none"
      style="height: 4px; background: linear-gradient(90deg, #0073aa, #00a0d2)"
    />
    <div
      class="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-4 pb-2 text-xs pointer-events-none"
      :class="$slidev.nav.currentLayout === 'section' ? 'text-white opacity-60' : 'text-gray-400'"
    >
      <span>教育部公民營計劃｜教學 4.0：用 AI 打造自動化數位職人官網</span>
      <span><SlideCurrentNo /> / <SlidesTotal /></span>
    </div>
  </template>
</template>
