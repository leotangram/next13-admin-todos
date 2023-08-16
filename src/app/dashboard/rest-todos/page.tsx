import prisma from '@/lib/prisma'
import { TodoGrid } from '@/todos'
import { useEffect } from 'react'

export const metadata = {
  title: 'Listado de ToDos',
  description: 'Listado de ToDos'
}

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })
  // useEffect(() => {
  //   fetch('/api/todos')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }, [])

  return (
    <div>
      {/* TODO: Formulario para gregar */}
      <TodoGrid todos={todos} />
    </div>
  )
}
