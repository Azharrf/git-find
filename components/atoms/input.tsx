import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    type: string;
    name: string;
    id: string;
    placeholder: string;
    value?: string;
}

export default function Input(props: InputProps) {
  const {
    type, name, id, placeholder, value, ...nativeProps
  } = props
  return (
    <>
      <input
        type={type}
        className="form-control"
        name={name}
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        {...nativeProps}
      />
    </>
  )
}
