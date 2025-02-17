import cn from 'classnames'
import { FC } from 'react'

import { IconProps } from '../../../types'

const DownloadIcon: FC<IconProps> = ({
  onClick,
  className,
  hoverColor = 'primary',
}) => (
  <svg
    className={`${className} cursor-pointer stroke-neutral hover:stroke-${hoverColor}-hover`}
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      stroke="neutral"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="m3 15c0 2.8284 0 4.2426 0.87868 5.1213s2.2929 0.8787 5.1213 0.8787h6c2.8284 0 4.2426 0 5.1213-0.8787s0.8787-2.2929 0.8787-5.1213" />
      <path d="m12 3v13l4-4.375m-4 4.375-4-4.375" />
    </g>
  </svg>
)
export default DownloadIcon
