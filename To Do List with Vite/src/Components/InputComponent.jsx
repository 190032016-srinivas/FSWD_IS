import { IconButton, InputAdornment, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
export const InputComponent = ({
  toDoList,
  setToDoList,
  inputToDo,
  setInputToDo,
}) => {
  function addTask() {
    if (inputToDo.trim() == "") {
      setInputToDo("");
      return;
    }
    setToDoList([{ id: uuidv4(), val: inputToDo }, ...toDoList]);
    setInputToDo("");
  }
  return (
    <div id="input_parent_container">
      <TextField
        placeholder="Enter To Do"
        value={inputToDo}
        onChange={(event) => {
          setInputToDo(event.target.value);
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={addTask}>
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            ),
            style: {
              fontSize: "16px",
              color: "white",
              padding: "0px",
              fontFamily: "monospace",
            },
          },
        }}
        size="small"
        style={{
          border: "2px solid #FF10F0",
          borderRadius: "5px",
          padding: "0px",
          width: "100%",
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#FF10F0",
            },
          },
        }}
      />
    </div>
  );
};
