import { getUserSessionServicer } from '@/auth/actions/auth-actions'
import prisma from '@/lib/prisma'
import { NewTodo, TodoGrid } from '@/todos'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export const metadata = {
  title: 'Listado de ToDos',
  description: 'Listado de ToDos'
}

export default async function RestTodosPage() {
  const user = await getUserSessionServicer()

  if (!user) redirect('/api/auth/signin')

  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: 'asc' }
  })

  // const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })
  // useEffect(() => {
  //   fetch('/api/todos')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }, [])

  return (
    <>
      <span className="text-3xl mb-10">Rest ToDos</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodoGrid todos={todos} />
    </>
  )
}
