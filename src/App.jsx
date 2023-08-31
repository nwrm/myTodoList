import "./App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [todoList, setTodoList] = useState([
    { id: uuid(), title: "리액트 공부하기" },
  ]);
  console.log(todoList);

  const [title, setTitle] = useState("");

  const getTitle = (event) => {
    setTitle(event.target.value);
  };

  const addTodo = () => {
    const todo = { id: uuid(), title: title };
    setTodoList((prev) => [...prev, todo]);
  };

  return (
    <div>
      <div className="todoFormTitle">
        <input onChange={getTitle} />
        <button onClick={addTodo}>추가하기</button>
      </div>
      <div>
        <h2>Todo List</h2>
        {todoList.map((value) => (
          <Todo key={value.id} todo={value} />
        ))}
      </div>
    </div>
  );
}

const Todo = ({ todo, undateTodo }) => {
  return (
    <div className="todoContainer">
      <div className="todoBox">{todo.title}</div>
    </div>
  );
};

export default App;
