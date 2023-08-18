'use client'

import { FC } from 'react'
import { Todo } from '@prisma/client'

import styles from './TodoItem.module.css'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5'

interface TodoItemProps {
  todo: Todo
  togleTodo: (id: string, complete: boolean) => Promise<Todo | void>
}

export const TodoItem: FC<TodoItemProps> = ({ todo, togleTodo }) => {
  const { id, complete, description } = todo

  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          onClick={() => togleTodo(id, !complete)}
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
