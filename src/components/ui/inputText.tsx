import React, { forwardRef, useId } from 'react';

interface InputTextProps extends React.HtmlHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  value: string
  invalid?: boolean
  valid?: boolean
  maxLength?: number
  name?: string
  placeholder?: string
  label: string
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(({value, invalid, maxLength, label, name, placeholder, valid, ...props} : InputTextProps, ref) => {
  const id = useId()

  const inputClass = invalid ? 'input-text invalid' : valid ? 'input-text valid' : 'input-text';
  const labelClass = invalid ? 'input-text_label invalid' : 'input-text_label'

  return (
  <div className='flex flex-column gap-75 f-width'>

      <label className={labelClass} htmlFor={id}>{label}</label>

      <div className='input-text_wrapper'>
        <input
          type='text'
          ref={ref}
          id={id}
          className={inputClass}
          value={value} 
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          {...props}
        />
      </div>

  </div>
  );
});


export const TextArea = forwardRef<HTMLTextAreaElement, InputTextProps>(({value, invalid, maxLength, label, name, placeholder, valid, ...props} : InputTextProps, ref) => {
  const id = useId()

  const inputClass = invalid ? 'input-text textarea invalid' : valid ? 'input-text textarea valid' : 'input-text textarea';
  const labelClass = invalid ? 'input-text_label invalid' : 'input-text_label'

  return (
  <div className='flex flex-column gap-75 f-width'>

      <label className={labelClass} htmlFor={id}>{label}</label>

      <div className='input-text_wrapper textarea'>
        <textarea
          ref={ref}
          id={id}
          className={inputClass}
          value={value} 
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={5}
          {...props}
        />
      </div>

  </div>
  );
});