import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const skip = Number(searchParams.get('skip') ?? '0')
  const take = Number(searchParams.get('take') ?? '10')

  if (isNaN(skip))
    return NextResponse.json({ error: 'Invalid "skip" param' }, { status: 400 })
  if (isNaN(take))
    return NextResponse.json({ error: 'Invalid "take" param' }, { status: 400 })

  const todos = await prisma.todo.findMany({
    skip,
    take
  })

  return NextResponse.json(todos)
}

export async function POST(request: Request) {
  const body = await request.json()
  const todo = await prisma.todo.create({ data: body })

  return NextResponse.json(todo)
}
