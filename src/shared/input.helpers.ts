export const isEmpty = (value?: string): boolean => {
  return value ? false : true
}

export const validatesEmail = (value: string): boolean => {
  return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false
}

export const validatesUrl = (value: string): boolean => {
  return value.match(/((https?[:]\/\/)|(w{3}))+([.])+(\w+)+([.])+(\w+)/)
    ? true
    : false
}

export const validatesInput = (
  event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  setError: (error: string) => void,
  setValidated: (valid: boolean) => void
) => {
  const { value, type } = event.target
  setValidated(false)
  setError("")
  if (isEmpty(value.trim())) {
    return setError("le champ ne peut pas être vide.")
  }
  switch (type) {
    case "email":
      return validatesEmail(value)
        ? setValidated(true)
        : setError("ceci n'est pas un email, petit coquin.")
    case "url":
      return validatesUrl(value)
        ? setValidated(true)
        : setError("ceci ne ressemle pas à une url, petit coquin.")
    case "text":
      return setValidated(true)
    case "textarea":
      return setValidated(true)
    default:
      return setValidated(true)
  }
}
