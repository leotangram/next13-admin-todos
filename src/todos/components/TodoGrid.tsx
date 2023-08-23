'use client'

import { Todo } from '@prisma/client'
import { FC } from 'react'
import { TodoItem } from './TodoItem'
// import * as todosApi from '@/todos/helpers/todos'
import { useRouter } from 'next/navigation'
import { toggleTodo } from '../actions/todo-actions'

interface TodoGridProps {
  todos?: Todo[]
}

export const TodoGrid: FC<TodoGridProps> = ({ todos = [] }) => {
  const router = useRouter()

  // const toggleTodo = async (id: string, complete: boolean) => {
  //   await todosApi.updateTodo(id, complete)

  //   router.refresh()
  // }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} togleTodo={toggleTodo} />
      ))}
    </div>
  )
}
