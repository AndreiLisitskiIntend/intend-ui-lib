import { FC } from 'react'

import { PaginationProps } from '../../types'
import Button from '../button/Button'
import { ArrowIcon } from '../icons'

const Pagination: FC<PaginationProps> = ({
  limit,
  page,
  total,
  onPageChange,
  className,
}) => {
  const totalPages = Math.ceil(total / limit)
  const maxVisiblePages = 5

  const getPages = () => {
    if (totalPages <= maxVisiblePages) {
      return [...Array(totalPages).keys()].map((n) => n + 1) // Начинаем с 1
    }

    const pages: (number | string)[] = [1]

    if (page > 3) {
      pages.push('...')
    }

    const start = Math.max(2, page - 1)
    const end = Math.min(totalPages - 1, page + 1)

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (page < totalPages - 2) {
      pages.push('...')
    }

    pages.push(totalPages)
    return pages
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button
        disabled={page === 1}
        iconProps={{ className: 'size-6' }}
        label={'< Previous'}
        shape={'rounded'}
        variant={'outlined'}
        onClick={() => onPageChange(page - 1)}
      />
      {getPages().map((p, index) => (
        <Button
          key={index}
          className={`w-[3.5rem]`}
          disabled={p === '...'}
          iconProps={{ className: 'size-6 -scale-100' }}
          label={p.toString()}
          shape={'square'}
          size={'medium'}
          variant={`${page === p ? 'solid' : 'outlined'}`}
          onClick={() => typeof p === 'number' && onPageChange(p)}
        />
      ))}
      <Button
        disabled={page >= totalPages}
        iconProps={{ className: 'size-6 -scale-100' }}
        label={'Next >'}
        shape={'rounded'}
        variant={'outlined'}
        onClick={() => onPageChange(page + 1)}
      />
    </div>
  )
}

export default Pagination
