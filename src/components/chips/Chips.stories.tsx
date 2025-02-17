import { Meta, StoryObj } from '@storybook/react'

import Chips from './Chips'

const meta: Meta<typeof Chips> = {
  title: 'Components/chips',
  component: Chips,
  parameters: {
    layout: 'centered',
  },
  tags: ['Chips'],
  args: {
    label: 'Default Chip',
    color: 'primary',
    size: 'medium',
    shape: 'pills',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ErrorChip: Story = {
  args: {
    label: 'Error Chip',
    color: 'error',
  },
}

export const SuccessChip: Story = {
  args: {
    label: 'Success Chip',
    color: 'success',
  },
}

export const WarningChip: Story = {
  args: {
    label: 'Warning Chip',
    color: 'warning',
  },
}

export const SmallChip: Story = {
  args: {
    label: 'Small Chip',
    size: 'small',
    color: 'info',
  },
}

export const LargeChip: Story = {
  args: {
    label: 'Large Chip',
    size: 'large',
    color: 'neutral',
  },
}
