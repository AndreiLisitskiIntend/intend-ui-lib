import { FC } from 'react'

import { IconProps } from '../../../types'

const SearchIcon: FC<IconProps> = ({ className }) => (
  <svg
    className={`text-neutral ${className}`}
    fill="none"
    height="20"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width="20"
  >
    <path
      d="M21 21l-4.35-4.35M16.4 10.6A5.4 5.4 0 1 0 5.6 10.6a5.4 5.4 0 0 0 10.8 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SearchIcon
