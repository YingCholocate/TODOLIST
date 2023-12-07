import { LegacyRef, forwardRef } from 'react'

interface InputProps {
  type?: string
  required?: boolean
  disabled?: boolean
  placeholder?: string
}

function Input(props: InputProps, ref: LegacyRef<HTMLInputElement>) {
  const { type = 'text', disabled, placeholder, ...rest } = props
  return (
    <div>
      <input
        ref={ref}
        {...rest}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={`
              outline-none
              form-input
              block 
              w-full 
              rounded
            border-slate-100
              shadow-sm 
              ring-1 
              ring-inset 
              ring-slate-100
              placeholder:text-slate-200  
              focus:ring-2 
              focus:ring-inset 
              focus:ring-sky-200 
              sm:text-sm 
              sm:leading-6
              text-slate-200
              text-xs
              p-3
              `}
      />
    </div>
  )
}

export default forwardRef(Input)
