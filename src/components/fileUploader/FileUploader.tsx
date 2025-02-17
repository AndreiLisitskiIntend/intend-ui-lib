import cn from 'classnames'
import React, { ChangeEvent, forwardRef } from 'react'

import { FileUploaderProps } from '../../types'

const FileUploader = forwardRef<HTMLInputElement, FileUploaderProps>(
  (
    { onUpload, multiple = false, accept = 'image/*,video/mp4', className },
    ref,
  ) => {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files ? Array.from(event.target.files) : []

      onUpload(files)
    }

    return (
      <div className={cn('flex w-full items-center justify-center', className)}>
        <label
          className="flex h-36 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral bg-neutral-bg hover:bg-neutral-hover"
          htmlFor="dropzone-file"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 size-8 text-primary"
              fill="none"
              viewBox="0 0 20 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <p className="mb-2 text-sm text-primary">
              <span className="font-semibold">Click to upload</span>
            </p>
          </div>
          <input
            ref={ref}
            accept={accept}
            className="hidden"
            id="dropzone-file"
            multiple={multiple}
            type="file"
            onChange={handleFileChange}
          />
        </label>
      </div>
    )
  },
)

export default FileUploader
