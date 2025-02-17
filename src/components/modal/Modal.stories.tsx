import { Meta, StoryObj } from '@storybook/react'

import Modal from './Modal'
import Button from '../button/Button'

const meta: Meta<typeof Modal> = {
  title: 'Components/modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['Modal'],
  args: {
    isOpen: true,
    title: 'Default modal',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <p className="p-4">This is a default modal</p>,
  },
}

export const WithButtons: Story = {
  args: {
    title: 'modal with Buttons',
    children: <p className="p-4">This modal has actions</p>,
    onCancel: () => alert('Cancel clicked'),
    onConfirm: () => alert('Confirm clicked'),
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel',
  },
}

export const CustomContent: Story = {
  args: {
    title: 'Custom Content modal',
    children: (
      <div className="flex flex-col items-center p-4">
        <p>Here is some custom content</p>
        <Button
          label="Click me"
          onClick={() => alert('button inside modal clicked')}
        />
      </div>
    ),
  },
}
