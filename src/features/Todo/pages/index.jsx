import React, { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "eat",
      status: "completed",
    },
    {
      id: 2,
      title: "sleep",
      status: "new",
    },
    {
      id: 3,
      title: "code",
      status: "completed",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState("all");

  const handleTodoClick = (todo, index) => {
    //clone current array to the new one
    const newTodoList = [...todoList];
    console.log(todo, index);

    // toggle state
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "completed" ? "new" : "completed",
    };
    setTodoList(newTodoList);
  };

  const handleTodoDelete = (todo) => {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleTodoFormSubmit = (formValues) => {
    console.log("Form Submit:", formValues);
    // add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilterStatus("all");
  };
  const handleShowNewClick = () => {
    setFilterStatus("new");
  };
  const handleShowCompletedClick = () => {
    setFilterStatus("completed");
  };

  const renderTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );
  // console.log(renderTodoList);

  return (
    <div>
      <h3>Todo List</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoDelete} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowNewClick}>Show New</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
      </div>
    </div>
  );
}

export default TodoFeature;
