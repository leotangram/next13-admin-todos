export const dynamic = 'force-dynamic'

import { getUserSessionServicer } from '@/auth/actions/auth-actions'
import prisma from '@/lib/prisma'
import { NewTodo, TodoGrid } from '@/todos'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Server Actions',
  description: 'Server Actions'
}

export default async function RestTodosPage() {
  const user = await getUserSessionServicer()

  if (!user) redirect('/api/auth/signin')

  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: 'asc' }
  })

  return (
    <>
      <span className="text-3xl mb-10">Server Actions (Alpha)</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodoGrid todos={todos} />
    </>
  )
}
