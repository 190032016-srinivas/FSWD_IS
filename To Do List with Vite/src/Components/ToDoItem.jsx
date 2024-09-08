import { IconButton } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuidv4 } from "uuid";

export const ToDoItem = ({
  toDoList,
  setToDoList,
  setInputToDo,
  completedTodoList,
  setCompletedTodoList,
  toDo,
  index,
  key,
}) => {
  function addTask() {
    let MIndex = index;
    let newToDoList = toDoList.filter((name, index) => {
      return index != MIndex;
    });
    setToDoList(newToDoList);
    setCompletedTodoList([{ id: uuidv4(), val: toDo }, ...completedTodoList]);
  }
  function editTask() {
    setInputToDo(toDo);
    let MIndex = index;
    let newToDoList = toDoList.filter((name, index) => {
      return index != MIndex;
    });
    setToDoList(newToDoList);
  }
  function deleteTask() {
    const deleteConfirm = window.confirm("Are you sure you want to delete?");
    if (deleteConfirm) {
      let MIndex = index;
      let newToDoList = toDoList.filter((name, index) => {
        return index != MIndex;
      });
      setToDoList(newToDoList);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "monospace",
        fontSize: "14px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: "monospace",
          fontSize: "14px",
          // color: "#FF10F0",
          // fontWeight: "bold",
        }}
      >
        <IconButton
          onClick={addTask}
          sx={{
            padding: "0px",
            marginRight: "5px",
          }}
        >
          <DoneIcon />
        </IconButton>
        {toDo}
      </div>
      <div>
        <IconButton
          onClick={editTask}
          sx={{
            padding: "0px",
            marginRight: "5px",
          }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={deleteTask}
          sx={{
            padding: "0px",
            marginRight: "5px",
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};
