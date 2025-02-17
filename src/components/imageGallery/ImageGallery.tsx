import cn from 'classnames'
import React, { useState, FC, useRef, useEffect } from 'react'

import { ImageGalleryProps } from '../../types'
import Button from '../button/Button'
import ArrowIcon from '../icons/svg/Arrow'
import Modal from '../modal/Modal'

const ImageGallery: FC<ImageGalleryProps> = ({
  items = [],
  showSelect = false,
  showDelete = false,
  onSelectionChange,
  className,
}) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [openedImage, setOpenedImage] = useState<string | null>(null)
  const [page, setPage] = useState(0)
  const galleryRef = useRef<HTMLDivElement | null>(null)
  const itemsPerPage = 4
  const totalPages = Math.ceil(items?.length / itemsPerPage)

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage)
    }
  }

  useEffect(() => {
    if (onSelectionChange) onSelectionChange(selectedImages)
  }, [selectedImages])

  const toggleImageSelection = (src: string) => {
    setSelectedImages((prevSelectedImages) =>
      prevSelectedImages.includes(src)
        ? prevSelectedImages.filter((image) => image !== src)
        : [...prevSelectedImages, src],
    )
  }

  const handleImageOpen = (src: string) => {
    setOpenedImage(src)
  }

  const handleSelectAll = () => {
    if (selectedImages.length === items?.length) {
      setSelectedImages([])
    } else {
      setSelectedImages(items?.map((item) => item.url))
    }
  }

  return (
    <div className={cn(className, `flex w-full flex-col items-center gap-4`)}>
      {!!items?.length && (
        <>
          <div className={'flex items-center gap-2'}>
            {items?.length > 4 && (
              <ArrowIcon
                className={`size-6 cursor-pointer ${page === 0 ? 'cursor-auto opacity-50' : ''}`}
                onClick={() => handlePageChange(page - 1)}
              />
            )}
            <div ref={galleryRef} className="flex gap-2">
              {items
                ?.slice(page * itemsPerPage, (page + 1) * itemsPerPage)
                .map(({ url, type }, index) => (
                  <div
                    key={index}
                    className={cn(
                      'relative group flex-shrink-0 snap-center rounded-lg h-36 aspect-square',
                      {
                        'border-4 border-neutral': selectedImages.includes(url),
                      },
                    )}
                  >
                    {type === 'image' ? (
                      <img
                        alt={`Image ${index}`}
                        className="size-full origin-center cursor-pointer rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-110"
                        src={url}
                      />
                    ) : (
                      <video
                        className="size-full origin-center cursor-pointer rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-110"
                        src={url}
                      />
                    )}

                    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-lg bg-black/50 text-sm text-white opacity-0 transition-all group-hover:opacity-100">
                      <button
                        className={'size-full hover:bg-black/60'}
                        onClick={() => handleImageOpen(url)}
                      >
                        Open
                      </button>
                      {showSelect && (
                        <button
                          className={'size-full hover:bg-black/70'}
                          onClick={() => toggleImageSelection(url)}
                        >
                          {selectedImages.includes(url) ? 'Deselect' : 'Select'}
                        </button>
                      )}
                      {showDelete && (
                        <button
                          className={'size-full hover:bg-black/70'}
                          onClick={() => toggleImageSelection(url)}
                        >
                          {'Delete'}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
            {items?.length > 4 && (
              <ArrowIcon
                className={`size-6 -scale-100 cursor-pointer ${page === totalPages - 1 ? 'cursor-auto opacity-50' : ''}`}
                onClick={() => handlePageChange(page + 1)}
              />
            )}
          </div>
          {totalPages > 1 && (
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i}
                  className={cn('size-3 rounded-full transition-all')}
                  color={page === i ? 'success' : 'primary'}
                  shape={'square'}
                  size={'icon'}
                  onClick={() => handlePageChange(i)}
                />
              ))}
            </div>
          )}

          <div className="relative flex w-full items-center justify-end">
            {showSelect && selectedImages.length > 0 && (
              <p
                className={'absolute left-0'}
              >{`Selected images: ${selectedImages.length}`}</p>
            )}
            {showSelect && (
              <Button
                className={'mx-auto w-40'}
                label={
                  selectedImages.length === items?.length
                    ? 'Deselect All'
                    : 'Select All'
                }
                size={'small'}
                variant={'outlined'}
                onClick={handleSelectAll}
              />
            )}
          </div>

          {openedImage && (
            <Modal
              cancelLabel={'Close'}
              isOpen={true}
              onCancel={() => setOpenedImage(null)}
            >
              <div className={'p-4 w-full justify-center flex'}>
                {openedImage.includes('image') ? (
                  <img
                    alt="Opened"
                    className="mx-auto max-h-[70vh] max-w-full"
                    src={openedImage}
                  />
                ) : (
                  <video
                    className="mx-auto max-h-[70vh] max-w-full"
                    controls={true}
                    src={openedImage}
                  />
                )}
              </div>
            </Modal>
          )}
        </>
      )}
    </div>
  )
}

export default ImageGallery
