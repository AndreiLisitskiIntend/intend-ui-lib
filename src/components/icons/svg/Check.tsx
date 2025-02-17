import { FC } from 'react'

import { IconProps } from '../../../types'

const CheckIcon: FC<IconProps> = ({ onClick, className }) => (
  <svg
    className={className}
    fill="none"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M13.3334 4L6.00008 11.3333L2.66675 8"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
)
export default CheckIcon
