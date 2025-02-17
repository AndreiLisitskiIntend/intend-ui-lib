import { FC } from 'react'

import { CheckboxProps } from '../../types'
import CheckIcon from '../icons/svg/Check'

const Checkbox: FC<CheckboxProps> = ({
  checked = false,
  onChange,
  backgroundColor = 'primary',
}) => (
  <label className="flex cursor-pointer items-center">
    <input
      checked={checked}
      className="hidden"
      type="checkbox"
      onChange={(e) => onChange?.(e.target.checked)}
    />
    <div
      className={`border-1 flex size-6 items-center justify-center rounded ${checked ? `border-${backgroundColor} bg-${backgroundColor}` : 'border-neutral bg-transparent'} hover:border-primary-hover`}
    >
      {checked && <CheckIcon />}
    </div>
  </label>
)

export default Checkbox
