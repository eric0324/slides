import talksData from '~/data/talks.json'
import type { Talk } from '~/types/talk'

export function useTalks() {
  const route = useRoute()
  const router = useRouter()

  const talks = talksData as Talk[]

  const allTags = computed(() => [...new Set(talks.flatMap((t) => t.tags))].sort())

  const selectedTag = computed<string | null>({
    get: () => {
      const t = route.query.tag
      return typeof t === 'string' && t.length > 0 ? t : null
    },
    set: (val) => {
      router.push({ query: val ? { tag: val } : {} })
    },
  })

  const filteredTalks = computed(() => {
    const tag = selectedTag.value
    const list = tag ? talks.filter((t) => t.tags.includes(tag)) : talks
    return [...list].sort((a, b) => b.date.localeCompare(a.date))
  })

  return { talks, allTags, selectedTag, filteredTalks }
}
