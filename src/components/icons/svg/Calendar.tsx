import { FC } from 'react'

import { IconProps } from '../../../types'

const CalendarIcon: FC<IconProps> = ({ onClick, className }) => (
  <svg
    className={`size-6 cursor-pointer stroke-neutral ${className}`}
    fill="none"
    height="800px"
    viewBox="0 0 24 24"
    width="800px"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="m20 10v-3c0-1.1046-0.8954-2-2-2h-12c-1.1046 0-2 0.89543-2 2v3m16 0v9c0 1.1046-0.8954 2-2 2h-12c-1.1046 0-2-0.8954-2-2v-9m16 0h-16m4-7v4m8-4v4"
      stroke="stroke-neutral"
      strokeLinecap="round"
      strokeWidth="2"
    />
    <rect fill="none" height="3" rx=".5" width="3" x="6" y="12" />
    <rect fill="none" height="3" rx=".5" width="3" x="10.5" y="12" />
    <rect fill="none" height="3" rx=".5" width="3" x="15" y="12" />
  </svg>
)
export default CalendarIcon
