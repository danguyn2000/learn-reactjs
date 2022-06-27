import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, index) => {
    if (!onTodoClick) return;
    onTodoClick(todo, index);
  };
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoClick(todo, index)}
        >
          {todo.title}
          <button style={{ marginLeft: "20px" }}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;