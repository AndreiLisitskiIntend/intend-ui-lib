import { Meta, StoryObj } from '@storybook/react'

import Dropdown from './Dropdown'

const meta = {
  title: 'Components/dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['Dropdown'],
  args: {
    label: 'Select an option',
    placeholder: 'Choose...',
    options: [
      { accessor: 'option1', label: 'Option 1' },
      { accessor: 'option2', label: 'Option 2' },
      { accessor: 'option3', label: 'Option 3' },
    ],
    value: '',
  },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithError: Story = {
  args: {
    errorMessage: 'This field is required',
  },
}
