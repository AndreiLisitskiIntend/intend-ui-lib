import { Meta, StoryObj } from '@storybook/react'

import Autocomplete from './Autocomplete'

const meta = {
  title: 'Components/autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['Autocomplete'],
} satisfies Meta<typeof Autocomplete>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Focused: Story = {
  args: {
    search: 'search term',
    isOpen: true,
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ],
  },
}
