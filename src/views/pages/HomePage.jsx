import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import { Box, Modal, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [date, setDate] = useState();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "#fff",
    border: "1px solid #c7c7cc",
    boxShadow: 24,
    p: 4,
  };

  const createButtonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "blue",
    border: "none",
    cursor: "pointer",
  };

  const cancelButtonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "red",
    border: "none",
    cursor: "pointer",
  };

  const inputStyle = {
    border: "1px solid grey",
    padding: "10px",
    borderRadius: "3px",
  };

  return (
    <div style={{ height: "100vh" }}>
      <h2>HomePage</h2>
      <button style={createButtonStyle} onClick={handleOpen}>
        <AddIcon />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button style={cancelButtonStyle} onClick={handleClose}>
              <ClearIcon />
            </button>
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create New Article
          </Typography>
          <form>
            <div>
              <label htmlFor="todo">Memo</label>
              <input style={inputStyle} id="todo" type="text" />
            </div>
            <div>
              <label htmlFor="todo">Memo</label>
              <input style={inputStyle} id="todo" type="text" />
            </div>
            <div>
              <label htmlFor="todo">Memo</label>
              <input style={inputStyle} id="todo" type="text" />
            </div>
            <div>
              <label htmlFor="todo">Memo</label>
              <input style={inputStyle} id="todo" type="text" />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={date}
                onChange={(newValue) => setDate(newValue)}
              />
            </LocalizationProvider>
            <button>save</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
