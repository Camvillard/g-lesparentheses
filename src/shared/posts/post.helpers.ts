export const createExcerpt = (extract: string, prune?: number): string => {
  return `${extract
    .split(" ")
    .slice(0, prune || 72)
    .join(" ")} (...)`
}

export const isFeminine = (category: string): boolean => {
  if (category === "histoire" || category === "recette") {
    return true
  }
  return false
}
