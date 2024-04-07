import React from 'react'

type Props = {
  label: string
  inputName: string
}

const FormularioLabel = ({ label, inputName }: Props) => {
  return (
    <label
      htmlFor={inputName}
      className="block text-sm font-medium text-dark dark:text-white"
    >
      {label}
    </label>
  )
}

export default FormularioLabel
