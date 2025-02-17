import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import DatePicker, { DatePickerRef } from 'react-multi-date-picker'

import { DateCalendarProps } from '../../types'
import { CalendarIcon } from '../icons'
import { formatInput, parseDateInput, validateDateInput } from './helper'
import useClickOutside from '../../hooks/UseClickOutside'
import { useIsMobile } from '../../hooks/UseMobileDetector'
import Input from '../input/Input'
import './styles.scss'

const DateCalendar: FC<DateCalendarProps> = ({
  onChange,
  required = false,
  submitted = false,
  minDate,
  maxDate,
  dateFormat = 'YYYY/MM/DD',
  className,
  ...rest
}) => {
  const isMobile = useIsMobile()
  const calendarRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const datePickerRef = useRef<DatePickerRef>(null)

  useClickOutside<HTMLDivElement>(calendarRef, () => setIsOpen(false))

  const [error, setError] = useState<string | null>(null)
  const [inputValue, setInputValue] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (datePickerRef.current) {
      datePickerRef.current.openCalendar()
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
    return dateFormat === 'YYYY-MM-DD'
      ? `${year}-${month}-${day}`
      : `${year}/${month}/${day}`
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const rawValue = e.target.value
    const formattedValue = formatInput(rawValue)

    if (!formattedValue) {
      setInputValue('')
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
      console.log(parsedDate)
      if (!isNaN(parsedDate.getTime())) {
        if (onChange) onChange(parsedDate.toISOString())
      }
    }
    setError(error)
  }

  const handleCalendarChange = (selectedDate?: Date): void => {
    if (selectedDate) {
      const formattedDate = formatDateInput(selectedDate)
      setInputValue(formattedDate)
      if (onChange) onChange(selectedDate.toISOString())
      setError(null)
    }
  }

  return (
    <DatePicker
      ref={datePickerRef}
      arrow={false}
      buttons={false}
      className={`${isMobile ? 'rmdp-mobile' : 'py-2'} calendar-picker`}
      headerOrder={['YEAR_MONTH']}
      maxDate={maxDate}
      minDate={minDate}
      monthYearSeparator={' '}
      render={() => (
        <Input
          {...rest}
          ref={inputRef}
          EndIcon={CalendarIcon}
          autoComplete={'off'}
          className={`${className}`}
          errorMessage={error}
          handleIconClick={() => setIsOpen(!isOpen)}
          iconProps={{ className: 'absolute right-3 hover:stroke-primary' }}
          label={'Birthday:'}
          name={'DatePicker'}
          placeholder={'YYYY-MM-DD'}
          showDelete={false}
          value={inputValue || ''}
          onChange={handleInputChange}
          onClick={() => setIsOpen(!isOpen)}
          onFocus={handleFocusChange}
        />
      )}
      shadow={false}
      showOtherDays={true}
      style={{ border: 'unset' }}
      value={inputValue}
      onChange={(date) => handleCalendarChange(date?.toDate())}
    />
  )
}

export default DateCalendar
