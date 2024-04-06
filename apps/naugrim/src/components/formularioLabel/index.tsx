import React from 'react'

type Props = {
  label: string
  inputName: string
}

const FormularioLabel = ({ label, inputName }: Props) => {
  return (
    <label htmlFor={inputName} className="uppercase font-bold">
      {label}
    </label>
  )
}

export default FormularioLabel
