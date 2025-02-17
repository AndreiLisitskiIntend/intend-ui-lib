import { Meta, StoryObj } from '@storybook/react'

import Snackbar, { showToast } from './Snackbar'

const meta = {
  title: 'Components/snackbar',
  component: Snackbar,
  parameters: {
    layout: 'centered',
  },
  args: {
    message: 'This is a sample toast message',
  },
} satisfies Meta<typeof Snackbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    message: 'This is a default snackbar message',
  },
}

export const Success: Story = {
  args: {
    message: 'Success toast message!',
  },
  play: () => {
    showToast.success('Success toast message!')
  },
}

export const Error: Story = {
  args: {
    message: 'Error toast message!',
  },
  play: () => {
    showToast.error('Error toast message!')
  },
}

export const Info: Story = {
  args: {
    message: 'Info toast message!',
  },
  play: () => {
    showToast.info('Info toast message!')
  },
}

export const Warning: Story = {
  args: {
    message: 'Warning toast message!',
  },
  play: () => {
    showToast.warning('Warning toast message!')
  },
}
