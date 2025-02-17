import cn from 'classnames'
import React, { ChangeEvent, forwardRef, useState } from 'react'

import { TextAreaProps } from '../../types'

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, onChange, ...rest }, ref) => {
    const [charCount, setCharCount] = useState(0)

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(event.target.value.length)
      if (onChange) {
        onChange(event.target.value)
      }
    }

    return (
      <div className={cn(`relative flex flex-col`, rest.className)}>
        {label && (
          <label className={`mb-2 block font-medium text-neutral-text`}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`max-h-[50vh] min-h-32 w-full rounded-lg border border-neutral bg-neutral-bg px-6 py-3 placeholder-neutral focus:border-primary-hover focus:outline-none focus:ring-primary-hover`}
          maxLength={600}
          rows={4}
          value={rest.value}
          onChange={handleChange}
          {...rest}
        />
        <div className="mt-1 text-right text-sm text-neutral">
          {charCount}/600
        </div>
      </div>
    )
  },
)

export default TextArea
