'use server'

import prisma from '@/lib/prisma'
import { Todo } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const PATHS = {
  DASHBOARD_SERVER_TODOS: '/dashboard/server-todos'
}

const sleep = (seconds: number = 2): Promise<boolean> => {
  return new Promise(resolve => setTimeout(() => resolve(true), seconds * 1000))
}

export const toggleTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  await sleep(3)
  const todo = await prisma.todo.findFirst({ where: { id } })

  if (!todo) {
    throw new Error(`Todo with id ${id} not found`)
  }

  const updateTodo = await prisma.todo.update({
    where: { id },
    data: { complete }
  })

  revalidatePath(PATHS.DASHBOARD_SERVER_TODOS)

  return updateTodo
}

export const createTodo = async (description: string) => {
  const todo = await prisma.todo.create({ data: { description } })
  revalidatePath(PATHS.DASHBOARD_SERVER_TODOS)

  return todo
}

export const deleteCompleted = async () => {
  await prisma.todo.deleteMany({ where: { complete: true } })
  revalidatePath(PATHS.DASHBOARD_SERVER_TODOS)
}
