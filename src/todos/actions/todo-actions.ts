'use server'

import prisma from '@/lib/prisma'
import { Todo } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export const toggleTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } })

  if (!todo) {
    throw new Error(`Todo with id ${id} not found`)
  }

  const updateTodo = await prisma.todo.update({
    where: { id },
    data: { complete }
  })

  revalidatePath('/dashboard/server-todos')

  return updateTodo
}
