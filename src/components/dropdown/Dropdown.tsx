import cn from 'classnames'
import React, { FC, useRef, useState } from 'react'

import useClickOutside from '../../hooks/UseClickOutside'
import { DropdownProps } from '../../types'
import { ArrowIcon } from '../icons'
import Input from '../input/Input'
import Loader from '../loader/Loader'

const Dropdown: FC<DropdownProps> = ({
  options,
  label,
  placeholder = 'Select an option:',
  errorMessage,
  value,
  onChange,
  pending,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useClickOutside<HTMLDivElement>(dropdownRef, () => setIsOpen(false))

  const handleSelect = (selectedValue: string) => {
    if (onChange) {
      onChange(selectedValue)
    }
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className="relative">
      <Input
        EndIcon={pending ? Loader : ArrowIcon}
        className={cn(className, `capitalize`)}
        errorMessage={errorMessage}
        iconProps={{
          className: `absolute right-3 size-6 ${isOpen ? 'rotate-90' : '-rotate-90'} cursor-pointer`,
          onClick: () => setIsOpen(!isOpen),
        }}
        label={label}
        placeholder={placeholder}
        readOnly={true}
        showDelete={false}
        value={
          options?.find((option) => option.accessor === value)?.label || ''
        }
        onClick={() => setIsOpen(!isOpen)}
      />

      <ul
        className={`absolute z-10 mt-1 w-full transform overflow-hidden rounded-xl border border-neutral-border bg-neutral-bg shadow-lg transition-all duration-300 ${
          isOpen
            ? 'scale-y-100 opacity-100'
            : 'pointer-events-none scale-y-0 opacity-0'
        } origin-top`}
      >
        {options?.map((option) => (
          <li
            key={option.accessor}
            className={`cursor-pointer px-4 py-2 capitalize hover:bg-neutral-hover ${option.accessor === value ? 'pointer-events-none cursor-not-allowed bg-neutral-hover' : ''}`}
            onClick={() => handleSelect(option.accessor)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
