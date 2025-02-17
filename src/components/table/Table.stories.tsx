import { Meta, StoryObj } from '@storybook/react'

import Table from './Table'
import { TableColumn } from '../../types'
import Checkbox from '../checkbox/Checkbox'
import Chips from '../chips/Chips'
import { CalendarIcon, CloseIcon, SearchIcon } from '../icons'
import Close from '../icons/svg/Close'

const meta = {
  title: 'Components/table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['Table'],
  args: {
    columns: [
      { header: 'Avatar', accessor: 'avatar', width: 'small', align: 'left' },
      {
        header: 'UserName',
        accessor: 'userName',
        width: 'medium',
        align: 'left',
      },
      { header: 'Email', accessor: 'email', width: 'medium', align: 'left' },
      { header: 'Phone', accessor: 'phone', width: 'medium', align: 'left' },
      { header: 'Status', accessor: 'status', width: 'small', align: 'left' },
      {
        header: 'Edit',
        accessor: 'edit',
        width: 'small',
        align: 'left',
        action: <CalendarIcon />,
      },
      {
        header: 'Delete',
        accessor: 'delete',
        width: 'small',
        align: 'left',
        action: <CloseIcon />,
      },
    ] as TableColumn[],
    data: [
      {
        avatar: (
          <img
            alt="avatar"
            className="size-10 rounded-full"
            src="https://i.pravatar.cc/150?img=1"
          />
        ),
        userName: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 234 567 890',
        status: 'Active',
        edit: null,
        delete: null,
      },
      {
        avatar: (
          <img
            alt="avatar"
            className="size-10 rounded-full"
            src="https://i.pravatar.cc/150?img=2"
          />
        ),
        userName: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+1 234 567 891',
        status: 'Inactive',
        edit: null,
        delete: null,
      },
    ],
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const UserTable: Story = {
  args: {
    columns: [
      { header: 'Avatar', accessor: 'avatar', width: 'small', align: 'left' },
      {
        header: 'UserName',
        accessor: 'userName',
        width: 'medium',
        align: 'left',
      },
      { header: 'Email', accessor: 'email', width: 'medium', align: 'left' },
      { header: 'Phone', accessor: 'phone', width: 'medium', align: 'left' },
      { header: 'Status', accessor: 'status', width: 'small', align: 'left' },
      {
        header: 'Edit',
        accessor: 'edit',
        width: 'small',
        align: 'left',
        action: {
          element: <Checkbox />,
          props: (row: Record<string, any>) => ({
            checked: false,
            onClick: () => console.log(row),
          }),
        },
      },
      {
        header: '',
        accessor: 'delete',
        width: 'icon',
        align: 'left',
        action: {
          element: <CloseIcon />,
          props: (row: Record<string, any>) => ({
            color: 'primary',
          }),
        },
      },
    ],
    data: [
      {
        avatar: (
          <img
            alt="avatar"
            className="size-10 rounded-full"
            src="https://i.pravatar.cc/150?img=1"
          />
        ),
        userName: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 234 567 890',
        status: <Chips color={'success'} label={'Active'} />,
        edit: null,
        delete: null,
      },
      {
        avatar: (
          <img
            alt="avatar"
            className="size-10 rounded-full"
            src="https://i.pravatar.cc/150?img=2"
          />
        ),
        userName: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+1 234 567 891',
        status: <Chips color={'neutral'} label={'Inactive'} />,
        edit: null,
        delete: null,
      },
    ],
  },
}

export const CheckboxTable: Story = {
  args: {
    columns: [
      {
        header: 'Select',
        accessor: 'checkbox',
        width: 'small',
        align: 'left',
        action: {
          element: <Checkbox />,
          props: (row: Record<string, any>) => ({
            checked: false,
            onChange: () => console.log(row.id),
          }),
        },
      },
      { header: 'ID', accessor: 'id', width: 'small', align: 'left' },
      { header: 'Status', accessor: 'status', width: 'medium', align: 'left' },
      {
        header: 'Address',
        accessor: 'address',
        width: 'medium',
        align: 'left',
      },
      {
        header: 'Download',
        accessor: 'download',
        width: 'small',
        align: 'left',
        action: {
          element: <CloseIcon />,
          props: (row) => ({
            color: 'primary',
            onClick: () => console.log(row),
          }),
        },
      },
    ],
    data: [
      {
        checkbox: true,
        id: '001',
        status: 'Active',
        address: '123 Main St, Springfield, USA',
        download: null,
      },
      {
        checkbox: false,
        id: '002',
        status: 'Inactive',
        address: '456 Elm St, Springfield, USA',
        download: null,
      },
    ],
  },
}
