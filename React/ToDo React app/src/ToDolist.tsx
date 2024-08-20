//import React from "react";
import { TodoItem } from "./TodoItem";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  
  return (
    <>
      <h1 className='header'>TODO List</h1>
      <ul className='list'>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
