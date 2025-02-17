import cn from 'classnames'
import React, { FC } from 'react'

import { ButtonProps } from '../../types'
import Loader from '../loader/Loader'

import './styles.scss'

const Button: FC<ButtonProps> = ({
  label,
  variant = 'solid',
  size = 'medium',
  type = 'button',
  shape = 'pills',
  color = 'primary',
  isPending = false,
  disabled = false,
  expanded = false,
  className,
  onClick,
  StartIcon,
  EndIcon,
  iconProps,
  children,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center focus:outline-none gap-2'
  const expandedClasses = `${expanded ? 'w-full' : 'w-40 mx-auto'}`

  const sizeClasses = {
    icon: 'p-2',
    small: `px-2 py-1 text-sm h-[2rem]`,
    medium: 'px-3 py-3 text-base h-[3.5rem]',
    large: 'px-4 py-4 text-lg h-[4rem]',
  }[size]

  const shapeClasses = {
    square: 'rounded-xl aspect-square',
    pills: `rounded-full ${expandedClasses}`,
    rounded: `rounded-xl ${expandedClasses}`,
    circle: `rounded-full  aspect-square`,
  }[shape]

  const variantClasses = {
    plain: `btn-${color} plain`,
    outlined: `btn-${color} outline`,
    soft: `btn-${color} soft`,
    solid: `btn-${color}`,
  }[variant]

  const buttonClasses = cn(
    `${sizeClasses} ${baseClasses} ${variantClasses} ${shapeClasses} ${
      disabled || isPending ? 'opacity-50 cursor-not-allowed' : ''
    }`,
    className,
  )

  return (
    <button
      aria-label={label}
      className={buttonClasses}
      disabled={disabled || isPending}
      type={type}
      onClick={onClick}
    >
      {StartIcon && <StartIcon className={'size-6'} {...iconProps} />}
      {label && <span className={'capitalize'}>{label}</span>}
      {isPending ? (
        <Loader
          color={
            variant === 'plain' || variant === 'outlined' ? color : 'neutral'
          }
          size={size}
        />
      ) : (
        <>{children}</>
      )}
      {EndIcon && <EndIcon className={'size-6'} {...iconProps} />}
    </button>
  )
}

export default Button
