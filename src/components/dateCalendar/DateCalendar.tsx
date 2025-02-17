import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import DatePicker, { DatePickerRef } from 'react-multi-date-picker'

import { formatInput, parseDateInput, validateDateInput } from './helper'
import './styles.scss'
import useClickOutside from '../../hooks/UseClickOutside'
import { DateCalendarProps } from '../../types'
import { CalendarIcon } from '../icons'
import Input from '../input/Input'

const DateCalendar: FC<DateCalendarProps> = ({
  onChange,
  required = false,
  submitted = false,
  minDate,
  maxDate,
  dateFormat = 'YYYY/MM/DD',
  ...rest
}) => {
  const isMobile = true
  const calendarRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const datePickerRef = useRef<DatePickerRef>(null)

  useClickOutside<HTMLDivElement>(calendarRef, () => setIsOpen(false))

  const [error, setError] = useState<string | null>(null)
  const [inputValue, setInputValue] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen && datePickerRef.current) {
      datePickerRef.current.openCalendar()
    }
  }, [isOpen])

  useEffect(() => {
    if (submitted) validateInputValue(inputValue ?? '')
  }, [submitted])

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
      validateInputValue(formattedValue)
      return
    }
    setInputValue(formattedValue)
    validateInputValue(formattedValue)
  }

  function validateInputValue(input: string) {
    const { isValid, error } = validateDateInput(input, required)
    if (isValid) {
      const parsedDate = parseDateInput(input)
      if (!isNaN(parsedDate.getTime())) {
        if (onChange) onChange(parsedDate.toISOString())
      }
    }
    setError(error)
  }

  const handleCalendarChange = (selectedDate?: Date): void => {
    console.log('handleCalendarChange', selectedDate)
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
      calendarPosition={'bottom-center'}
      className={`${!isMobile ? 'rmdp-mobile' : 'date-calendar'} `}
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
          errorMessage={error}
          handleIconClick={() => setIsOpen(!isOpen)}
          iconProps={{
            className: 'absolute size-6 right-3 hover:stroke-primary',
          }}
          label={'Birthday:'}
          name={'DatePicker'}
          placeholder={'YYYY-MM-DD'}
          showDelete={false}
          value={inputValue || ''}
          onChange={handleInputChange}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      shadow={false}
      showOtherDays={true}
      value={null}
      onChange={(date) => handleCalendarChange(date?.toDate())}
    />
  )
}

export default DateCalendar
