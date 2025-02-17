import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Input from './Input'
import { CalendarIcon, CloseIcon, SearchIcon } from '../icons'

const meta = {
  title: 'Components/input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'text' },
    },
    expand: {
      control: { type: 'boolean' },
    },
    showDelete: {
      control: { type: 'boolean' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    StartIcon: {
      control: false,
    },
    EndIcon: {
      control: false,
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'medium',
    type: 'text',
    label: 'Label',
    value: '',
    placeholder: 'Enter text...',
  },
}

export const WithError: Story = {
  args: {
    ...Default.args,
    errorMessage: 'This field is required',
  },
}

export const WithStartIcon: Story = {
  args: {
    ...Default.args,
    StartIcon: SearchIcon,
  },
}

export const WithEndIcon: Story = {
  args: {
    ...Default.args,
    showDelete: false,
    EndIcon: CalendarIcon,
  },
}

export const WithClearButton: Story = {
  args: {
    ...Default.args,
    value: 'Some text',
    showDelete: true,
  },
}
