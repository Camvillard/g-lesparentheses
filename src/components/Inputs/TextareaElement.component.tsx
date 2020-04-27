import React, { useState } from "react"
import {
  TextareaGroupWrapper,
  TextareaWrapper,
  Textarea,
  InputError,
} from "./Input.ui"
import { Label } from "./Label.ui"
import { validatesInput } from "../../shared/input.helpers"

type TextareaProps = {
  placeholder?: string
  label?: string
  name?: string
  inputRef?: any
  onTextareaBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void
}

export const TextareaElement = (props: TextareaProps) => {
  const { placeholder, label, onTextareaBlur, inputRef } = props
  const [isValidated, setValidated] = useState(false)
  const [hasError, setError] = useState("")
  const getValidation = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    validatesInput(event, setError, setValidated)
    onTextareaBlur(event)
  }
  return (
    <TextareaGroupWrapper>
      <TextareaWrapper>
        {label && <Label>{label} /</Label>}
        <Textarea
          placeholder={placeholder}
          isValidated={isValidated}
          onBlur={getValidation}
          ref={inputRef}
        />
      </TextareaWrapper>
      {hasError && <InputError>(oups, {hasError})</InputError>}
    </TextareaGroupWrapper>
  )
}
