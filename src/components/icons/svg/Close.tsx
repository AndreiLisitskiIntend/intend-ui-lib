import { FC } from 'react'

import { IconProps } from '../../../types'

const CloseIcon: FC<IconProps> = ({ onClick, className }) => (
  <svg
    className={`${className} cursor-pointer fill-neutral hover:fill-primary`}
    height={20}
    viewBox="0 0 24 24"
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path d="m4.707 3.293-1.4141 1.4141 7.293 7.293-7.293 7.293 1.4141 1.4141 7.293-7.293 7.293 7.293 1.4141-1.4141-7.293-7.293 7.293-7.293-1.4141-1.4141-7.293 7.293-7.293-7.293z" />
  </svg>
)
export default CloseIcon
