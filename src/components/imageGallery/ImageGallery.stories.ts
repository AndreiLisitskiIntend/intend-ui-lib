import { Meta, StoryObj } from '@storybook/react'

import ImageGallery from './ImageGallery'

const meta: Meta<typeof ImageGallery> = {
  title: 'Components/imageGallery',
  component: ImageGallery,
  args: {
    items: [
      {
        url: 'http://www.nastol.com.ua/images/201311/nastol.com.ua_693052.jpg',
        type: 'image',
      },
      {
        url: 'http://www.nastol.com.ua/images/201311/nastol.com.ua_629052.jpg',
        type: 'image',
      },
      {
        url: 'http://www.nastol.com.ua/images/201311/nastol.com.ua_69052.jpg',
        type: 'image',
      },
      {
        url: 'https://www.w3schools.com/tags/img_girl.jpg',
        type: 'image',
      },
      {
        url: 'https://www.w3schools.com/tags/img_girl1.jpg',
        type: 'image',
      },
    ],
  },
}

export default meta

type Story = StoryObj<typeof ImageGallery>

export const Default: Story = {}
export const Empty: Story = {
  args: {
    items: [],
  },
}
