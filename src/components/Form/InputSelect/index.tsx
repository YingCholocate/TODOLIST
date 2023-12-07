interface InputProps {
  id: string
  type?: string
  required?: boolean
  disabled?: boolean
  placeholder?: string
}

const InputSelect: React.FC<InputProps> = ({ id, type = 'text', disabled, placeholder }) => {
  return (
    <div className="flex flex-wrap items-start relative min-h-100 border border-solid ">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={id}
        disabled={disabled}
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
                focus:ring-sky-100 
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

export default InputSelect
