import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./views/pages/HomePage";
import NotFoundPage from "./views/pages/NotFoundPage";
import Header from "./views/components/Header";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
