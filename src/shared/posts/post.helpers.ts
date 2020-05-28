export const createExcerpt = (extract: string): string => {
  return `${extract
    .split(" ")
    .slice(0, 72)
    .join(" ")} (...)`
}
