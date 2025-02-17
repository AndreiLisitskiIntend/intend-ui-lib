import { Meta, StoryObj } from '@storybook/react'

import DatePicker from './DatePicker'

const meta = {
  title: 'Components/datePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['DatePicker'],
  args: {
    required: false,
    submitted: false,
    dateFormat: 'YYYY/MM/DD',
  },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    required: false,
    submitted: false,
    dateFormat: 'YYYY/MM/DD',
  },
}
