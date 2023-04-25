import { CHANGE_COLORTHEME } from "../actions/colorThemeAction";
import { darkTheme, lightTheme } from "../constants/themeColor";

const initialState = {
  theme: lightTheme,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLORTHEME:
      const currentTheme = state.theme === lightTheme ? darkTheme : lightTheme;
      return {
        theme: currentTheme,
      };
    default: {
      return state;
    }
  }
}

export default rootReducer;
