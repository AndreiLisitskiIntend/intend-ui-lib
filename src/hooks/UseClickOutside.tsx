import { RefObject, useEffect } from 'react'

function useClickOutside<TElement extends HTMLElement>(
  ref: RefObject<TElement | null>,
  callback: () => void,
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref && ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ref, callback])
}

export default useClickOutside
