import React, { FC } from 'react'

const ErrorMessage: FC<{
  errorMessage?: string | null
}> = ({ errorMessage = null }) => (
  <p className="mt-2 text-sm text-error-active dark:text-error-active">
    {errorMessage}
  </p>
)

export default ErrorMessage
