import cn from 'classnames'
import { FC } from 'react'

import { ChipsProps } from '../../types'

const Chips: FC<ChipsProps> = ({
  label,
  size,
  shape,
  color = 'primary',
  className,
}) => {
  const bgColor = {
    error: 'bg-error-bg text-error ring-1 ring-error ring-inset',
    info: 'bg-info-bg text-info ring-1 ring-info ring-inset',
    neutral: 'bg-neutral-bg text-neutral-text ring-1 ring-neutral ring-inset',
    primary: 'bg-primary-bg text-primary ring-1 ring-primary ring-inset',
    success: 'bg-success-bg text-success ring-1 ring-success ring-inset',
    warning: 'bg-warning-bg text-warning ring-1 ring-warning ring-inset',
  }[color || 'primary']

  const sizeClasses = {
    small: 'px-2 py-1 text-xs h-[2rem]',
    medium: 'px-3 text-base h-[3.5rem]',
    large: 'px-4 text-lg h-[4rem]',
    icon: '',
  }[size || 'medium']

  const shapeClasses = {
    pills: 'rounded-full',
    rounded: 'rounded-xl',
  }[shape || 'pills']

  const chipsClassNames = cn(
    `flex items-center justify-center ${bgColor} ${shapeClasses} ${shapeClasses} ${sizeClasses}`,
    className,
  )

  return <div className={chipsClassNames}>{label}</div>
}

export default Chips
