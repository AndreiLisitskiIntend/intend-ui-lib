import cn from 'classnames'
import React, { ChangeEvent, forwardRef } from 'react'

import { InputProps } from '../../types'
import ErrorMessage from '../errorMessage/ErrorMessage'
import { CloseIcon } from '../icons'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'medium',
      type = 'text',
      expand = true,
      showDelete = true,
      label,
      errorMessage,
      iconProps,
      StartIcon,
      EndIcon,
      handleIconClick,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const handleClear = () => {
      if (rest.onChange) {
        rest.onChange({
          target: { value: '' },
        } as ChangeEvent<HTMLInputElement>)
      }
    }

    const baseClasses = cn(
      `block w-full rounded-full border px-6 transition duration-200 placeholder:capitalize focus:outline-none`,
      className,
    )
    const sizeClasses = {
      small: 'text-sm py-2 h-[2rem]',
      medium: 'text-base py-3 h-[3.5rem]',
      large: 'text-lg py-4 h-[4rem]',
    }[size]
    const expandedClasses = expand ? 'w-full' : 'w-full md:max-w-[300px]'
    const errorClasses = !!errorMessage
      ? 'border-error bg-error-bg text-error placeholder-error focus:border-error-active focus:ring-error-active'
      : 'border-neutral bg-neutral-bg placeholder-neutral focus:border-primary-hover focus:ring-primary-hover'

    let inputClasses = `${baseClasses} ${errorClasses && errorClasses} ${sizeClasses && sizeClasses}`
    if (StartIcon || EndIcon) {
      inputClasses = `${inputClasses} ${StartIcon ? `pr-6 pl-10` : 'pr-10 pl-6'}`
    } else {
      inputClasses = `${inputClasses} px-6`
    }

    if (showDelete) {
      inputClasses = `${inputClasses} ${showDelete && rest.value ? 'pr-10' : 'pr-6'}`
    }

    return (
      <div className={`relative flex flex-col ${expandedClasses}`}>
        {label && (
          <label
            className={`mb-2 block font-medium capitalize ${
              !!errorMessage ? 'text-error' : 'text-neutral-text'
            }`}
            htmlFor={rest.name}
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {StartIcon && (
            <StartIcon className="absolute left-4 size-6" {...iconProps} />
          )}
          <input
            ref={ref}
            className={inputClasses}
            id={rest.name}
            type={type}
            {...rest}
          />
          {!EndIcon && showDelete && rest && rest.value && (
            <CloseIcon
              className={'absolute right-4 size-6'}
              onClick={handleClear}
            />
          )}
          {EndIcon && (
            <EndIcon
              className="absolute right-4 size-6"
              onClick={handleIconClick}
              {...iconProps}
            />
          )}
        </div>
        {children}
        {errorMessage && <ErrorMessage errorMessage={errorMessage ?? ''} />}
      </div>
    )
  },
)

export default Input
