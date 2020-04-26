import React, { FocusEvent, useState, useRef } from "react"
import { Input, InputWrapper, InputGroupWrapper, InputError } from "./Input.ui"
import { Label } from "./Label.ui"
import {
  isEmpty,
  validatesEmail,
  validatesUrl,
  validatesInput,
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
  const getValidation = (event: FocusEvent<HTMLInputElement>) => {
    validatesInput(event, setError, setValidated)
    onInputBlur(event)
  }
  return (
    <InputGroupWrapper>
      <InputWrapper>
        {label && <Label htmlFor="">{label} /</Label>}
        <Input
          isValidated={isValidated}
          placeholder={placeholder}
          onBlur={getValidation}
          ref={inputRef}
          type={type || "text"}
        />
      </InputWrapper>
      {hasError && <InputError>(oups, {hasError})</InputError>}
    </InputGroupWrapper>
  )
}
