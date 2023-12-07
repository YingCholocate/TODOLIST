import { LegacyRef, forwardRef } from 'react'

interface InputProps {
  required?: boolean
  disabled?: boolean
  placeholder?: string
}

function TextArea(props: InputProps, ref: LegacyRef<HTMLTextAreaElement>) {
  const { disabled, placeholder, ...rest } = props
  return (
    <div>
      <textarea
        ref={ref}
        {...rest}
        disabled={disabled}
        placeholder={placeholder}
        className={`
             placeholder:text-slate-200
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

export default forwardRef(TextArea)
