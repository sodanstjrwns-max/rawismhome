// Wine Column Index - Combines all column data
export type { WineColumn } from './wineColumns'
export { categories } from './wineColumns'
import { wineColumns as part1 } from './wineColumns'
import { wineColumns2 as part2 } from './wineColumns2'
import { wineColumns3 as part3 } from './wineColumns3'

export const allWineColumns = [...part1, ...part2, ...part3]

export function getColumnBySlug(slug: string) {
  return allWineColumns.find(c => c.slug === slug)
}

export function getColumnsByCategory(categorySlug: string) {
  return allWineColumns.filter(c => c.categorySlug === categorySlug)
}

export function getRelatedColumns(slugs: string[]) {
  return slugs.map(s => allWineColumns.find(c => c.slug === s)).filter(Boolean)
}
