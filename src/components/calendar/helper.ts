interface ValidationResult {
  isValid: boolean
  error: string | null
}

export function validateDateInput(
  input: string,
  required: boolean,
): ValidationResult {
  if (required && !input.trim()) {
    return { isValid: false, error: 'Date is required' }
  }

  const isValidFormat = /^\d{4}\/\d{2}\/\d{1,2}$/.test(input)
  if (!isValidFormat) {
    return { isValid: false, error: 'Invalid date format (YYYY/MM/DD)' }
  }

  const [year, month, day] = input.split('/').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day))

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() + 1 !== month ||
    date.getUTCDate() !== day
  ) {
    return { isValid: false, error: 'Invalid date value' }
  }

  return { isValid: true, error: null }
}

export function formatInput(value: string): string {
  const digits = value.replace(/\D/g, '')
  const year = digits.slice(0, 4)
  const month = digits.slice(4, 6)
  const day = digits.slice(6, 8)
  let formatted = year
  if (month) formatted += `/${month}`
  if (day) formatted += `/${day}`
  return formatted
}

export function parseDateInput(input: string): Date {
  const [year, month, day] = input.split('/').map(Number)
  return new Date(Date.UTC(year, month - 1, day))
}
