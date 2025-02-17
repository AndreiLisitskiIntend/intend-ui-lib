import { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    label: 'User Avatar',
  },
} as Meta<typeof Avatar>

export const Default: StoryObj<typeof Avatar> = {
  args: {},
}

export const WithImage: StoryObj<typeof Avatar> = {
  args: {
    src: 'https://via.placeholder.com/150',
  },
}

export const WithoutImage: StoryObj<typeof Avatar> = {
  args: {
    src: '',
  },
}
