export interface Talk {
  slug: string
  title: string
  description: string
  tags: string[]
  event: string
  date: string                  // ISO YYYY-MM-DD
  links?: {
    video?: string
    repo?: string
  }
  url: string                   // /talks/<slug>/
}
