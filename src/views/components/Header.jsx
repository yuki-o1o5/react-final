import { Box, FormControlLabel, Stack } from "@mui/material";
import React from "react";
import { IOSSwitch } from "../../constants/switchTheme";
import { useDispatch } from "react-redux";
import { changeColorTheme } from "../../actions/colorThemeAction";

export default function Header() {
  const dispatch = useDispatch();

  const toggleColorTheme = () => {
    dispatch(changeColorTheme());
  };

  return (
    <Box  display="flex"
    justifyContent="space-between"
    width="100%">
      <h1>Logo</h1>
      <FormControlLabel
        control={
          <IOSSwitch sx={{ m: 1 }} defaultChecked onChange={toggleColorTheme} />
        }
      />
    </Box>
  );
}
