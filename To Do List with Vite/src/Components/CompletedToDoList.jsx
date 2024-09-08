import { IconButton, Stack } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CompletedTodoListItem } from "./CompletedToDoItem";
import "../App.css";
export const CompletedToDoList = ({ completedTodoList }) => {
  return (
    <div id="completed_main_container">
      <div id="completed_Heading">Completed</div>
      {completedTodoList.map((toDo) => (
        <CompletedTodoListItem key={toDo.id} toDo={toDo.val} />
      ))}
    </div>
  );
};
