import { FC } from 'react'
import { Todo } from '@prisma/client'

import styles from './TodoItem.module.css'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5'

interface TodoItemProps {
  todo: Todo
  // TODO: Acciones que quiero llamar
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { complete, description } = todo

  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${
            complete ? 'bg-blue-100' : 'bg-red-100'
          }`}
        >
          {complete ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div className="text-center sm:text-left">{description}</div>
      </div>
    </div>
  )
}
