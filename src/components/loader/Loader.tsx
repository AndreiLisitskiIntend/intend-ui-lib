import cn from 'classnames'
import React, { FC } from 'react'

import { AppColors, IconProps } from '../../types'

const Loader: FC<IconProps> = ({
  className,
  size = 'medium',
  color = 'neutral',
}) => {
  const sizesClass = {
    icon: 'size-4 border-y-2',
    small: 'size-4 border-y-2',
    medium: 'size-6 border-y-4',
    large: 'size-7 border-y-4',
  }[size]
  return (
    <div className={cn(`flex`, className)}>
      <div
        className={cn(
          `animate-spin rounded-full  border-${color}-hover`,
          sizesClass,
        )}
      />
    </div>
  )
}
export default Loader
