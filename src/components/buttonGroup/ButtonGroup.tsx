import { FC, useState } from 'react'

import { ButtonGroupProps } from '../../types'

const ButtonGroup: FC<ButtonGroupProps> = ({
  buttons,
  isMultiple,
  size = 'medium',
  onClick,
}) => {
  const [active, setActive] = useState<string[]>([])
  const sizeClasses = {
    icon: '',
    small: `px-2 py-1 text-sm h-[2rem]`,
    medium: 'px-3 py-3 text-base h-[3.5rem]',
    large: 'px-4 py-4 text-lg h-[4rem]',
  }[size]

  const getColor = (color: string, isActive: boolean) =>
    ({
      primary: `${isActive ? 'bg-primary-hover text-primary-text' : 'bg-neutral-bg text-primary'} border-neutral hover:bg-primary-hover hover:text-primary-text`,
      success: `${isActive ? 'bg-success-hover text-success-text' : 'bg-neutral-bg text-primary'} border-neutral hover:bg-success-hover hover:text-success-text`,
      warning: `${isActive ? 'bg-warning-hover text-warning-text' : 'bg-neutral-bg text-primary'} border-neutral hover:bg-warning-hover hover:text-warning-text`,
      error: `${isActive ? 'bg-error-hover text-error-text' : 'bg-neutral-bg text-primary'} border-neutral hover:bg-error-hover hover:text-error-text`,
      info: `${isActive ? 'bg-info-hover text-info-text' : 'bg-neutral-bg text-primary'} border-neutral hover:bg-info-hover hover:text-info-text`,
      neutral: `${isActive ? 'bg-neutral-hover text-neutral-text' : 'bg-neutral-bg text-primary'} border-neutral hover:bg-neutral-hover hover:text-neutral-text`,
    })[color]

  const handleSelect = (accessor: string) => {
    const resetButton = buttons.find((button) => button.resetAll)

    let newActive: string[]

    if (resetButton && resetButton.accessor === accessor) {
      newActive = [resetButton.accessor]
    } else {
      if (isMultiple) {
        newActive = active.includes(accessor)
          ? active.filter((item) => item !== accessor)
          : [
              ...active.filter((item) => item !== resetButton?.accessor),
              accessor,
            ]
      } else {
        newActive = [accessor]
      }
    }

    setActive(newActive)
    onClick(newActive)
  }

  return (
    <div className="shadow-xs inline-flex rounded-md" role="group">
      {buttons.map((button, index) => (
        <button
          key={button.label}
          className={`
          ${sizeClasses}
             ${getColor(button.color, active.includes(button.accessor))} border px-4 py-2 text-sm font-medium focus:outline-none focus:ring-0
             ${index === 0 ? 'rounded-s-lg border-r-0' : ''}
             ${index === buttons.length - 1 ? 'rounded-e-lg' : ''}
             ${index !== 0 && index !== buttons.length - 1 ? 'border-r-0' : ''}
              capitalize focus:z-10
              focus:ring-0
              flex items-center
           `}
          type="button"
          onClick={() => handleSelect(button.accessor)}
        >
          {button.label}
        </button>
      ))}
    </div>
  )
}

export default ButtonGroup
