import type { Meta, StoryObj } from '@storybook/react'

import ButtonGroup from './ButtonGroup'
import { ButtonGroupProps } from '../../types'

const meta: Meta<ButtonGroupProps> = {
  title: 'Components/buttonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  args: {
    isMultiple: true,
    buttons: [
      { accessor: 'ALL', label: 'ALL', color: 'primary', resetAll: true },
      { accessor: 'primary', label: 'primary', color: 'primary' },
      { accessor: 'success', label: 'success', color: 'success' },
      { accessor: 'error', label: 'error', color: 'error' },
      { accessor: 'warning', label: 'warning', color: 'warning' },
      { accessor: 'info', label: 'info', color: 'info' },
      { accessor: 'neutral', label: 'neutral', color: 'neutral' },
    ],
    onClick: (label) => console.log(label),
  },
}

export default meta
type Story = StoryObj<ButtonGroupProps>

export const Default: Story = {}
