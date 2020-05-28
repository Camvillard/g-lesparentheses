export const createExcerpt = (extract: string, prune?: number): string => {
  return `${extract
    .split(" ")
    .slice(0, prune || 72)
    .join(" ")} (...)`
}
