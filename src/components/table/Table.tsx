import { motion } from 'framer-motion'
import React, { cloneElement } from 'react'

import { TableProps } from '../../types'
import { Spinner } from '../index'

const Table = <T extends Record<string, any>>({
  columns,
  data,
  isPending = false,
}: TableProps<T>) => {
  const cellWidth = (width?: string) =>
    ({
      icon: 'w-10 h-10 p-2 box-content',
      small: 'w-1/4',
      medium: 'w-1/3',
      large: 'w-1/2',
    })[width || 'medium']

  const cellAlign = (align?: string) =>
    ({
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    })[align || 'left']

  return (
    <div
      className="relative w-full rounded-lg border border-neutral"
      role="table"
    >
      <table className="w-full table-fixed border-collapse">
        <thead className="sticky top-0 z-10">
          <tr>
            {columns.map((col) => (
              <th
                key={col?.accessor}
                className={`select-none border-b border-neutral px-4 align-middle ${cellWidth(col.width)} ${cellAlign(col.align)}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {isPending ? (
            <tr>
              <td colSpan={columns.length} className="py-8 text-center">
                <Spinner />
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                className="select-none p-8 text-center text-2xl font-bold"
                colSpan={columns.length}
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                animate={{ opacity: 1, y: 0 }}
                className={`${data.length - 1 > rowIndex ? 'border-b' : ''} border-neutral`}
                initial={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.1, delay: rowIndex * 0.02 }}
              >
                {columns.map((col) => {
                  const value = row[col.accessor]
                  return (
                    <td
                      key={col.accessor}
                      className={`select-none whitespace-nowrap px-4 align-middle ${cellWidth(col.width)} ${cellAlign(col.align)}`}
                    >
                      {col?.action && col.action.element ? (
                        <div className="flex items-center justify-center">
                          {cloneElement(
                            col.action.element,
                            typeof col.action.props === 'function'
                              ? col.action.props(row)
                              : col.action.props || {},
                          )}
                        </div>
                      ) : (
                        <div>{value}</div>
                      )}
                    </td>
                  )
                })}
              </motion.tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
