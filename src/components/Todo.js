import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : "incompleted"}`}
      >
        {task.task}
      </p>
      <div className="Todo-actions">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
          title="Edit Task"
        />

        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
          title="Delete Task"
        />
      </div>
    </div>
  );
};

export default Todo;
