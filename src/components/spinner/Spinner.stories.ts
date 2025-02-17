import { Meta, StoryObj } from '@storybook/react'

import Spinner from './Spinner'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['Spinner'],
  args: {
    label: 'Spinner',
    color: 'primary',
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Primary',
    color: 'warning',
  },
}
