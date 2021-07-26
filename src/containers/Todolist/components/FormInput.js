import React from 'react'

const FormInput = ({ placeholder, type, value, setValue }) => (

  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={e => setValue(e.target.value)}
  />
)

export default FormInput
