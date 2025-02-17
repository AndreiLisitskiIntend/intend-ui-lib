import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import Calendar from 'react-calendar'

import useClickOutside from '../../hooks/UseClickOutside'
import { DateCalendarProps } from '../../types'
import {
  formatInput,
  parseDateInput,
  validateDateInput,
} from '../calendar/helper'
import { CalendarIcon } from '../icons'
import Input from '../input/Input'
import './styles.scss'

const minYear = new Date(1900, 0, 1)
const maxYear = new Date(new Date().getFullYear(), 11, 31)

const DatePicker: FC<DateCalendarProps> = ({
  onChange,
  required = false,
  submitted = false,
  ...rest
}) => {
  const calendarRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useClickOutside<HTMLDivElement>(calendarRef, () => setIsOpen(false))

  const [isDropdownAbove, setIsDropdownAbove] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [date, setDate] = useState<Date | null>(null)
  const [inputValue, setInputValue] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setIsDropdownAbove(true)
    }
  }, [isOpen])

  useEffect(() => {
    if (submitted) validateValue(inputValue ?? '')
  }, [submitted])

  const handleFocusChange = () => setIsOpen(true)

  function formatDateInput(date: Date): string {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}/${month}/${day}`
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const rawValue = e.target.value
    const formattedValue = formatInput(rawValue)

    if (!formattedValue) {
      setInputValue('')
      setDate(null)
      if (onChange) onChange('')
      validateValue(formattedValue)
      return
    }
    setInputValue(formattedValue)
    validateValue(formattedValue)
  }

  function validateValue(input: string) {
    const { isValid, error } = validateDateInput(input, required)
    if (isValid) {
      const parsedDate = parseDateInput(input)
      if (!isNaN(parsedDate.getTime())) {
        setDate(parsedDate)
        if (onChange) onChange(parsedDate.toISOString())
      }
    }
    setError(error)
  }

  const handleCalendarChange = (selectedDate: Date): void => {
    setDate(selectedDate)
    const formattedDate = formatDateInput(selectedDate)
    setInputValue(formattedDate)
    if (onChange) onChange(selectedDate.toISOString())
    setError(null)
  }

  return (
    <div className="relative w-full">
      <Input
        {...rest}
        ref={inputRef}
        EndIcon={CalendarIcon}
        autoComplete={'off'}
        errorMessage={error}
        handleIconClick={() => setIsOpen(!isOpen)}
        label={'Birthday:'}
        name={'DatePicker'}
        placeholder={'YYYY-MM-DD'}
        showDelete={false}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocusChange}
      />
      {isOpen && (
        <div
          ref={calendarRef}
          className={`absolute max-w-80 ${isDropdownAbove ? 'bottom-full' : 'top-full'}`}
        >
          <Calendar
            maxDate={maxYear}
            minDate={minYear}
            value={date}
            onClickDay={handleCalendarChange}
          />
        </div>
      )}
    </div>
  )
}

export default DatePicker
