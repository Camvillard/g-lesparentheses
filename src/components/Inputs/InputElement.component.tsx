import React, { FocusEvent, useState, useRef } from "react"
import { Input, InputWrapper, InputGroupWrapper, InputError } from "./Input.ui"
import { Label } from "./Label.ui"
import {
  isEmpty,
  validatesEmail,
  validatesUrl,
} from "../../shared/input.helpers"

type InputElementProps = {
  placeholder?: string
  label?: string
  type?: string
  onInputBlur: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const InputElement = (props: InputElementProps) => {
  const { placeholder, label, type, onInputBlur } = props
  const inputRef = useRef(null)
  const [isValidated, setValidated] = useState(false)
  const [hasError, setError] = useState("")
  const validatesInput = (event: FocusEvent<HTMLInputElement>) => {
    const { value, type } = event.target
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
    }
    props.onInputBlur(event)
  }
  return (
    <InputGroupWrapper>
      <InputWrapper>
        {label && <Label htmlFor="">{label} /</Label>}
        <Input
          isValidated={isValidated}
          placeholder={placeholder}
          onBlur={validatesInput}
          ref={inputRef}
          type={type || "text"}
        />
      </InputWrapper>
      {hasError && <InputError>(oups, {hasError})</InputError>}
    </InputGroupWrapper>
  )
}
