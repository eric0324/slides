<template>
  <div
    v-if="$slidev.nav.currentLayout === 'cover' || $slidev.nav.currentLayout === 'section'"
    class="absolute inset-0 overflow-hidden pointer-events-none"
    style="z-index: 0"
  >
    <div
      class="absolute rounded-full"
      style="width: 480px; height: 480px; right: -120px; bottom: -140px; background: radial-gradient(circle, rgba(0,160,210,0.35) 0%, rgba(0,160,210,0) 70%)"
    />
    <svg class="absolute" style="top: 32px; left: 32px; width: 96px; height: 96px; opacity: 0.2" viewBox="0 0 80 80" fill="#ffffff">
      <circle cx="10" cy="10" r="2.5" />
      <circle cx="30" cy="10" r="2.5" />
      <circle cx="50" cy="10" r="2.5" />
      <circle cx="70" cy="10" r="2.5" />
      <circle cx="10" cy="30" r="2.5" />
      <circle cx="30" cy="30" r="2.5" />
      <circle cx="50" cy="30" r="2.5" />
      <circle cx="70" cy="30" r="2.5" />
      <circle cx="10" cy="50" r="2.5" />
      <circle cx="30" cy="50" r="2.5" />
      <circle cx="50" cy="50" r="2.5" />
      <circle cx="70" cy="50" r="2.5" />
      <circle cx="10" cy="70" r="2.5" />
      <circle cx="30" cy="70" r="2.5" />
      <circle cx="50" cy="70" r="2.5" />
      <circle cx="70" cy="70" r="2.5" />
    </svg>
  </div>
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
