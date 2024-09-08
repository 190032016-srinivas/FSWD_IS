import { useState } from "react";
import "./App.css";
import { ToDoList } from "./Components/ToDoList";
import { InputComponent } from "./Components/InputComponent";
import { CompletedToDoList } from "./Components/CompletedToDoList";
import { Header } from "./Components/Header";

function App() {
  const [toDoList, setToDoList] = useState([{ id: 1, val: "task1" }]);
  const [completedTodoList, setCompletedTodoList] = useState([
    { id: 1, val: "task2" },
  ]);
  const [inputToDo, setInputToDo] = useState("");
  return (
    <div id="main_container">
      <Header />
      <InputComponent
        toDoList={toDoList}
        setToDoList={setToDoList}
        inputToDo={inputToDo}
        setInputToDo={setInputToDo}
      />
      <div id="parent_todo_container">
        <ToDoList
          toDoList={toDoList}
          setToDoList={setToDoList}
          inputToDo={inputToDo}
          setInputToDo={setInputToDo}
          completedTodoList={completedTodoList}
          setCompletedTodoList={setCompletedTodoList}
        />
        <CompletedToDoList completedTodoList={completedTodoList} />
      </div>
    </div>
  );
}

export default App;
