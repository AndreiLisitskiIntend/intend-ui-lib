import React from 'react'
import { toast, ToastContainer, ToastOptions, Zoom } from 'react-toastify'
import './style.scss'

export const defaultToastOptions: ToastOptions = {
  position: 'bottom-left',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  theme: 'colored',
  transition: Zoom,
  closeButton: false,
}

function createToast(type: 'success' | 'error' | 'info' | 'warning') {
  return (content: string) =>
    toast[type](`${content}`, {
      ...defaultToastOptions,
      progressClassName: type,
      style: {
        backgroundColor: `var(--color-${type}-bg)`,
        color: `var(--color-${type}-active)`,
      },
    })
}

export const showToast = {
  success: createToast('success'),
  error: createToast('error'),
  info: createToast('info'),
  warning: createToast('warning'),
}

const Snackbar = () => <ToastContainer />

export default Snackbar
