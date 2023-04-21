import React from 'react'
import { notFound } from 'next/navigation'

const TodoPage = ({ params: { todoId } }) => {
  if (todoId > 200) return notFound()
  return <div>TodoPage: {todoId}</div>
}

export default TodoPage

export async function generateStaticParams() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await response.json()

    const trimmedTodos = todos.splice(0, 10) //для того чтобы api не забанила нас
    return trimmedTodos.map(todo => ({
      todoId: todo.id.toString()
    }))
  } catch (error) {
    console.error(error)
  }
}
