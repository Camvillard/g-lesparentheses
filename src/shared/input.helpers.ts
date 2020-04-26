export const isEmpty = (value?: string): boolean => {
  return value ? false : true
}

export const validatesEmail = (value: string): boolean => {
  return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false
}

export const validatesUrl = (value: string): boolean => {
  return value ? true : false
}
