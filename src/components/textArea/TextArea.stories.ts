import { Meta, StoryObj } from '@storybook/react'

import TextArea from './TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'Components/textArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['TextArea'],
  args: {
    label: 'Your message',
    className: '',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithPlaceholder: Story = {
  args: {
    label: 'Write something...',
    className: '',
  },
}

export const MaxCharactersReached: Story = {
  args: {
    label: 'Max 600 characters',
    className: '',
  },
}
