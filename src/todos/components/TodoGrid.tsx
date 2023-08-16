'use client'

import { Todo } from '@prisma/client'
import { FC } from 'react'
import { TodoItem } from './TodoItem'

interface TodoGridProps {
  todos?: Todo[]
}

export const TodoGrid: FC<TodoGridProps> = ({ todos = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3-gap-2">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
