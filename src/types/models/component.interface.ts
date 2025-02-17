import {
  ButtonHTMLAttributes,
  ComponentType,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  SVGProps,
} from 'react'

import { AppColors, AppSizes, ButtonVariant } from '../types'

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'size'
  > {
  variant?: ButtonVariant
  size?: AppSizes | 'icon'
  type?: 'button' | 'submit' | 'reset'
  shape?: 'square' | 'pills' | 'rounded' | 'circle'
  color?: AppColors
  onClick?: () => void
  label?: string
  isPending?: boolean
  expanded?: boolean
  disabled?: boolean
  className?: string
  children?: ReactNode
  iconProps?: IconProps
  StartIcon?: ComponentType<IconProps>
  EndIcon?: ComponentType<IconProps>
}

export interface TextAreaProps
  extends Omit<
    DetailedHTMLProps<
      InputHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    'onChange'
  > {
  label?: string
  onChange: (s: string) => void
}

export interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size'
  > {
  size?: AppSizes
  type?: string
  label?: string
  expand?: boolean
  errorMessage?: string | null
  iconProps?: IconProps
  showDelete?: boolean
  handleIconClick?: () => void
  children?: ReactNode
  StartIcon?: ComponentType<IconProps>
  EndIcon?: ComponentType<IconProps>
  className?: string
}

export interface DateCalendarProps extends CommonComponentProps {
  initialDate?: Date
  onChange?: (date?: string) => void
  required?: boolean
  submitted?: boolean
  minDate?: Date
  maxDate?: Date
  dateFormat?: 'YYYY/MM/DD' | 'YYYY-MM-DD'
}

export interface DropdownOption {
  label: string
  accessor: string
}

export interface DropdownProps extends CommonComponentProps {
  label?: string
  placeholder?: string
  value?: string
  options?: DropdownOption[]
  errorMessage?: string
  name?: string
  pending?: boolean
  onChange?: (value: string) => void
}

export interface ModalProps extends CommonComponentProps {
  isOpen?: boolean
  title?: string
  onConfirm?: () => void
  onCancel?: () => void
  confirmLabel?: string
  cancelLabel?: string
  children?: ReactNode
}

export interface LayoutProps extends CommonComponentProps {
  size?: AppSizes
  children: ReactNode
}

export interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string
  show?: boolean
  size?: AppSizes | 'icon'
  isHovered?: boolean
  color?: string
  onClick?: () => void
  hoverColor?: string
}

export interface CheckboxProps extends CommonComponentProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  backgroundColor?: AppColors
}

export interface ChipsProps extends CommonComponentProps {
  label?: string
  color?: AppColors
  size?: AppSizes
  shape?: 'pills' | 'rounded'
}

interface CommonComponentProps {
  className?: string
}

export interface TableColumn<T = any> {
  header: string
  accessor: Extract<keyof T, string>
  width?: 'icon' | 'small' | 'medium' | 'large'
  align?: 'left' | 'center' | 'right'
  action?: {
    element: ReactElement
    props?: (row: T) => Record<string, any>
  }
}

export interface TableProps<T> {
  columns: TableColumn<T>[]
  data: T[]
  isPending?: boolean
}

export interface ButtonGroupProps extends CommonComponentProps {
  activeButtons?: ButtonGroupItemProps[]
  buttons: ButtonGroupItemProps[]
  isMultiple?: boolean
  size?: AppSizes
  onClick: (label: string[]) => void
}

export interface ButtonGroupItemProps {
  label: string
  accessor: string
  color: string
  resetAll?: boolean
}

export interface PaginationProps extends CommonComponentProps {
  limit: number
  page: number
  total: number
  onPageChange: (newPage: number) => void
}

export interface AvatarProps extends CommonComponentProps {
  src?: string
  label?: string
  isEditable?: boolean
  isPending?: boolean
  onChange?: (src?: File) => void
}

export interface FileUploaderProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  onUpload: (files: File[]) => void
  uploadedFile?: File
  multiple?: boolean
  accept?: string
  className?: string
}

export interface ImageGalleryItemProps {
  url: string
  type?: 'image' | 'video'
}

export interface ImageGalleryProps extends CommonComponentProps {
  items: ImageGalleryItemProps[]
  showSelect?: boolean
  showDelete?: boolean
  onSelectionChange?: (selectedImages: string[]) => void
}
