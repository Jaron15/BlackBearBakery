import { gql, useQuery } from '@apollo/client';
import React from 'react'

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      text
      completed
    }
  }
`;

function TodoList() {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <ul>
      {data.todos.map(todo => (
        <li key={todo.id}>
          {todo.text} ({todo.completed ? 'completed' : 'incomplete'})
        </li>
      ))}
    </ul>
  );
}
 
export default TodoList