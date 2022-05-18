import "./App.css"
import { makeStyles, ThemeProvider } from "@mui/styles"
import { createTheme } from "@mui/material/styles"
import { green } from "@mui/material/colors"
import Container from "@mui/material/Container"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
    marginBottom: 15,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
})

const theme = createTheme({
  typography: {
    h2: {
      color: "red",
    },
  },
  palette: {
    primary: {
      main: green[500],
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className='App'>
          <Header />
          <Content />
          <Footer />
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
