'use client'

import {
  experimental_useOptimistic as useOptimistic,
  FC,
  useState
} from 'react'
import { Todo } from '@prisma/client'

import styles from './TodoItem.module.css'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5'

interface TodoItemProps {
  todo: Todo
  togleTodo: (id: string, complete: boolean) => Promise<Todo | void>
}

export const TodoItemExperimental: FC<TodoItemProps> = ({
  todo,
  togleTodo
}) => {
  const { id, complete, description } = todo

  const [todoOptimistic, toggleOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      complete: newCompleteValue
    })
  )

  const onToggleTodo = async () => {
    toggleOptimistic(!todoOptimistic.complete)
    try {
      await togleTodo(todoOptimistic.id, !todoOptimistic.complete)
    } catch (error) {
      toggleOptimistic(!todoOptimistic.complete)
    }
  }

  return (
    <div
      className={todoOptimistic.complete ? styles.todoDone : styles.todoPending}
    >
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          onClick={() => onToggleTodo()}
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${
            todoOptimistic.complete ? 'bg-blue-100' : 'bg-red-100'
          }`}
        >
          {todoOptimistic.complete ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div className="text-center sm:text-left">
          {todoOptimistic.description}
        </div>
      </div>
    </div>
  )
}
