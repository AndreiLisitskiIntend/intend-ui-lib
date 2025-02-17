import { Meta, StoryObj } from '@storybook/react'

import FileUploader from './FileUploader'

const meta: Meta<typeof FileUploader> = {
  title: 'Components/FileUploader',
  component: FileUploader,
  parameters: {
    layout: 'centered',
  },
  tags: ['FileUploader'],
  args: {
    multiple: false,
    accept: 'image/*,video/*',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const SingleFile: Story = {}

export const MultipleFiles: Story = {
  args: {
    multiple: true,
  },
}

export const CustomAccept: Story = {
  args: {
    accept: 'image/png,image/jpeg',
  },
}
