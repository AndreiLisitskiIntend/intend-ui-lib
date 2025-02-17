import cn from 'classnames'
import React, { FC, useState, useEffect } from 'react'

import { AppColors } from '../../types'

const Spinner: FC<{
  label?: string
  color?: AppColors
  visible?: boolean
  className?: string
}> = ({ label = 'Loading', color = 'primary', visible = true, className }) => {
  const [shouldRender, setShouldRender] = useState(visible)

  useEffect(() => {
    if (visible) {
      setShouldRender(true)
    } else {
      const timeout = setTimeout(() => setShouldRender(false), 300) // 300ms = время анимации
      return () => clearTimeout(timeout)
    }
  }, [visible])

  const colorClass = `border-${color}`

  return shouldRender ? (
    <div
      className={cn(
        `bg-neutral-bg/30 fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 backdrop-blur-sm transition-opacity duration-300`,
        { 'opacity-100': visible, 'opacity-0': !visible },
        className,
      )}
    >
      <div
        className={cn(
          `size-16 animate-spin rounded-full border-y-4`,
          colorClass,
        )}
      />
      <label>{label}...</label>
    </div>
  ) : null
}

export default Spinner
