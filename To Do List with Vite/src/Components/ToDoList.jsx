import { ToDoItem } from "./ToDoItem";
import "../App.css";
export const ToDoList = ({
  toDoList,
  setToDoList,
  setInputToDo,
  completedTodoList,
  setCompletedTodoList,
}) => {
  return (
    <div id="toDoList_parent_container">
      <div id="toDoHeading">To Do</div>
      {toDoList.map((toDo, index) => (
        <ToDoItem
          key={toDo.id}
          toDoList={toDoList}
          setToDoList={setToDoList}
          setInputToDo={setInputToDo}
          completedTodoList={completedTodoList}
          setCompletedTodoList={setCompletedTodoList}
          toDo={toDo.val}
          index={index}
        />
      ))}
    </div>
  );
};
