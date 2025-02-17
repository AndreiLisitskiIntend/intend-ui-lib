import cn from 'classnames'
import React, { FC } from 'react'

import { ModalProps } from '../../types'
import Button from '../button/Button'
import { CloseIcon } from '../icons'

const Modal: FC<ModalProps> = ({
  isOpen,
  title,
  onConfirm,
  onCancel,
  children,
  className,
  confirmLabel = 'Confirm',
  cancelLabel,
}) => {
  if (!isOpen) return null

  return (
    <div
      className={cn(
        `fixed inset-0 z-50 flex max-h-full w-full items-center justify-center overflow-y-auto bg-black/20 overflow-x-hidden backdrop-blur-sm md:inset-0`,
        className,
      )}
      id="default-modal"
    >
      <div className="relative flex max-h-full w-full max-w-2xl items-center justify-center p-8">
        <div className="relative w-full rounded-xl bg-neutral-bg shadow">
          <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5">
            <h3 className="text-xl font-semibold text-neutral-text">{title}</h3>
            <CloseIcon className={'size-4'} onClick={onCancel} />
          </div>
          <div className={'flex items-center justify-start'}>
            {children && children}
          </div>
          {(onCancel || onConfirm) && (
            <div className="flex w-full items-center justify-end rounded-b border-t border-neutral-border p-4 md:p-5">
              <div className="flex gap-2">
                {onCancel && cancelLabel && (
                  <Button
                    className={'w-40'}
                    label={cancelLabel}
                    size={'medium'}
                    variant={'plain'}
                    onClick={onCancel}
                  />
                )}
                {onConfirm && confirmLabel && (
                  <Button
                    className={'w-40'}
                    label={confirmLabel}
                    size={'medium'}
                    onClick={onConfirm}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
