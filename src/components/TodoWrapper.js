import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (newTask, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Stay Organized!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTodo} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={() => {
              setTodos(
                todos.map((todo) =>
                  todo.id === todo.id ? { ...todo, isEditing: true } : todo
                )
              );
            }}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
