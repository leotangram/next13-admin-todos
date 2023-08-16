import { Todo } from '@prisma/client'
import { FC } from 'react'

interface TodoItemProps {
  todo: Todo
  // TODO: Acciones que quiero llamar
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { description } = todo

  return <div>{description}</div>
}
