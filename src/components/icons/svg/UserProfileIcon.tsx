import { FC } from 'react'

import { IconProps } from '../../../types'

const UserProfileIcon: FC<IconProps> = ({ onClick, className }) => (
  <svg
    className={`cursor-pointer stroke-neutral ${className}`}
    fill="none"
    height="12"
    viewBox="0 0 11 12"
    width="11"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M1 9.49984C1 8.881 1.24583 8.28751 1.68342 7.84992C2.121 7.41234 2.71449 7.1665 3.33333 7.1665H8C8.61884 7.1665 9.21233 7.41234 9.64992 7.84992C10.0875 8.28751 10.3333 8.881 10.3333 9.49984C10.3333 9.80926 10.2104 10.106 9.99162 10.3248C9.77283 10.5436 9.47609 10.6665 9.16667 10.6665H2.16667C1.85725 10.6665 1.5605 10.5436 1.34171 10.3248C1.12292 10.106 1 9.80926 1 9.49984Z"
      strokeLinejoin="round"
    />
    <path d="M5.66699 4.83301C6.63349 4.83301 7.41699 4.04951 7.41699 3.08301C7.41699 2.11651 6.63349 1.33301 5.66699 1.33301C4.70049 1.33301 3.91699 2.11651 3.91699 3.08301C3.91699 4.04951 4.70049 4.83301 5.66699 4.83301Z" />
  </svg>
)
export default UserProfileIcon
