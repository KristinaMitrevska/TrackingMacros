import './App.css'
import HomePage from "./ui/pages/home/HomePage.jsx";
import {createTheme, ThemeProvider} from "@mui/material";

function App() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Edu SA Hand',
        },
    });

  return (
    <>
        <ThemeProvider theme={theme}>
            <HomePage></HomePage>
        </ThemeProvider>
    </>
  )
}

export default App
