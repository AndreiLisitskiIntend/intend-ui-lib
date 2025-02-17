import React, { useEffect, useRef, useState } from 'react'

import useClickOutside from '../../hooks/UseClickOutside'
import Input from '../input/Input'
import Loader from '../loader/Loader'

const SearchIcon = () => (
  <svg
    className="absolute left-3 size-6 text-neutral"
    fill="none"
    height="20"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width="20"
  >
    <path
      d="M21 21l-4.35-4.35M16.4 10.6A5.4 5.4 0 1 0 5.6 10.6a5.4 5.4 0 0 0 10.8 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Autocomplete = () => {
  const [pending, setPending] = useState(false)
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [focused, setFocused] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useClickOutside<HTMLDivElement>(dropdownRef, () => setIsOpen(false))
  const options: any[] = []
  useEffect(() => {
    if (search) {
      setTimeout(() => {
        setPending(true)
      }, 1000)
    }
  }, [search])

  useEffect(() => {
    if (pending) {
      setTimeout(() => {
        setPending(false)
        setIsOpen(true)
      }, 2000)
    }
  }, [pending])
  return (
    <div className={`max-w-2/4 relative ${focused ? 'w-[500px]' : ''}`}>
      <Input
        EndIcon={pending ? Loader : undefined}
        StartIcon={SearchIcon}
        iconProps={{ className: 'absolute right-3' }}
        placeholder={'search'}
        showDelete={!pending}
        value={search}
        onBlur={() => setFocused(false)}
        onChange={(p) => setSearch(p.target.value)}
        onFocus={() => setFocused(true)}
      />
      <div ref={dropdownRef}>
        <ul
          className={`absolute z-10 mt-1 w-full transform overflow-hidden rounded-xl border border-neutral-border bg-neutral-bg shadow-lg transition-all duration-300 ${
            isOpen
              ? 'scale-y-100 opacity-100'
              : 'pointer-events-none scale-y-0 opacity-0'
          } origin-top`}
        >
          {options.length ? (
            options.map((option) => (
              <li
                key={option.value}
                className={`hover:bg-neutral-hover} cursor-pointer px-4 py-2 lowercase`}
              >
                {option.label}
              </li>
            ))
          ) : (
            <div className={'px-4 py-2'}>
              <p>Nothing found</p>
            </div>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Autocomplete
