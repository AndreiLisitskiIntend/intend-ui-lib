import { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react/*'

import Pagination from './Pagination'

const meta = {
  title: 'Components/pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['pagination'],
  args: {
    limit: 10,
    page: 0,
    total: 45,
    onPageChange: (newPage) => console.log('Page changed to:', newPage),
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
