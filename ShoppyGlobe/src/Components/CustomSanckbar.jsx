import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const CustomSnackbar = ({ open, onClose, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <MuiAlert
        onClose={onClose}
        severity="success"
        sx={{ width: "100%" }}
        variant="filled"
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default CustomSnackbar;
