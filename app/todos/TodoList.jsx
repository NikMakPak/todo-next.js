import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const fetchTodos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return await response.json()
  } catch (error) {
    console.error(error)
    return notFound()
  }
}

const TodoList = async () => {
  const todos = await fetchTodos()
  return (
    <>
      {todos
        ? todos.map(todo => (
            <p key={todo.id}>
              <Link href={`/todos/${todo.id}`}>Todo_: {todo.id}</Link>
            </p>
          ))
        : 'no todos'}
    </>
  )
}

export default TodoList
