import { useEffect, useState } from 'react';
import { Form } from './form';
import { TodoList } from './ToDolist';
import './App.css';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null ) return []

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title: string) {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: crypto.randomUUID(), title, completed: false }
    ]);
  }

  function deleteTodo(id: string) {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos(currentTodos =>
      currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      })
    );
  }

  return (
    <>
      <Form onSubmit={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
