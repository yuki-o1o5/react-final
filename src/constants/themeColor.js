import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#ffffff",
      secondary: "#bdbdbd",
      disabled: "#757575",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#212121",
      secondary: "#757575",
      disabled: "#bdbdbd",
    },
  },
});
