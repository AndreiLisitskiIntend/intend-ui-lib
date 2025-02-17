import { Meta, StoryObj } from '@storybook/react'

import DateCalendar from './DateCalendar'

const meta = {
  title: 'Components/calendar',
  component: DateCalendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['DateCalendar'],
  args: {
    required: false,
    submitted: false,
    dateFormat: 'YYYY/MM/DD',
  },
} satisfies Meta<typeof DateCalendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    required: false,
    submitted: false,
    dateFormat: 'YYYY/MM/DD',
  },
}
