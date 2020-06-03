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

export const activateInfosBox = () => {
  const infoBoxTitle = document.querySelector("#open-info-box")
  const infoBox = document.querySelector("#info-box-content")
  const closeIcon = document.querySelector("#close-icon")
  infoBoxTitle?.addEventListener("click", () => {
    infoBox?.classList.add("is-active")
  })
  closeIcon?.addEventListener("click", () => {
    infoBox?.classList.remove("is-active")
  })
}
