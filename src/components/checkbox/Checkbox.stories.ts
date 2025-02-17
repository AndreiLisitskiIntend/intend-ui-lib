import { Meta, StoryObj } from '@storybook/react'

import Checkbox from './Checkbox'
import { AppColors } from '../../types'

const meta = {
  title: 'Components/checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['Checkbox'],
  args: {
    checked: false,
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const CustomBackground: Story = {
  args: {
    backgroundColor: 'error',
  },
}
