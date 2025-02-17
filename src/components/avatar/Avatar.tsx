import cn from 'classnames'
import React, { ChangeEvent, FC, useRef } from 'react'

import { AvatarProps } from '../../types'
import UserProfileIcon from '../icons/svg/UserProfileIcon'
import { showToast, Spinner } from '../index'

const MAX_SIZE = 5 * 1024 * 1024
const Avatar: FC<AvatarProps> = ({
  src,
  label,
  onChange,
  isPending = false,
  isEditable = false,
  className,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleAdd = () => {
    fileInputRef.current?.click()
  }

  const handleClear = () => {
    if (onChange) onChange(undefined)
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file)
      if (file.size > MAX_SIZE) {
        showToast.error('File size exceeds the 5MB limit.')
        return
      }
    if (onChange) onChange(file)
  }

  return (
    <div className={cn('relative w-full', className)}>
      <div
        className={
          'group relative aspect-square overflow-hidden rounded-full border border-neutral bg-neutral-bg object-cover'
        }
      >
        {src ? (
          <img alt={label || 'avatar-img'} className={'w-full'} src={src} />
        ) : (
          <UserProfileIcon className={'size-full'} />
        )}
        {isEditable && (
          <input
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            type="file"
            onChange={handleFileChange}
          />
        )}
        {isEditable && (
          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-lg bg-black/50 text-sm text-white opacity-0 transition-all group-hover:opacity-100">
            <button
              className={'size-full text-2xl hover:bg-black/60'}
              onClick={handleAdd}
            >
              {src ? 'Edit' : 'Add'}
            </button>
            {src && (
              <button
                className={'size-full text-2xl hover:bg-black/70'}
                onClick={handleClear}
              >
                {src ? 'Delete' : ''}
              </button>
            )}
          </div>
        )}
        <Spinner className={'absolute'} visible={isPending} />
      </div>
    </div>
  )
}

export default Avatar
