import { CHANGE_COLORTHEME } from "../actions/colorThemeAction";
import { darkTheme, lightTheme } from "../constants/themeColor";

const initialState = {
  color: "light",
  theme: lightTheme,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLORTHEME:
      const currentColor = state.color === "light" ? "dark" : "light";
      const currentTheme = state.theme === lightTheme ? darkTheme : lightTheme;
      return {
        color: currentColor,
        theme: currentTheme,
      };
    default: {
      return state;
    }
  }
}

export default rootReducer;
