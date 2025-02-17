import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Button from './Button'
import { CalendarIcon, SearchIcon } from '../icons'

const meta = {
  title: 'Components/button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['plain', 'outlined', 'soft', 'solid'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    shape: {
      control: { type: 'select' },
      options: ['pills', 'rounded', 'circle', 'square'],
    },
    color: { control: 'text' },
    isPending: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Click me',
    variant: 'solid',
    size: 'large',
    shape: 'pills',
    color: 'primary',
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
    EndIcon: CalendarIcon,
    iconProps: { className: 'size-6' },
  },
}

export const Loading: Story = {
  args: {
    ...Default.args,
    isPending: true,
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}
