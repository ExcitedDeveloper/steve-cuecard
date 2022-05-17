import logo from "./logo.svg"
import "./App.css"
import Button from "@mui/material/Button"
import SaveIcon from "@mui/icons-material/Save"
import { makeStyles, ThemeProvider } from "@mui/styles"
import { createTheme } from "@mui/material/styles"
import { green } from "@mui/material/colors"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import ResponsiveAppBar from "./components/ResponsiveAppBar"
import ResponsiveFooter from "./components/ResponsiveFooter"
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

function ButtonStyled() {
  const classes = useStyles()
  return <Button className={classes.root}>Test Styled Button</Button>
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className='App'>
          <header className='App-header'>
            <ResponsiveAppBar />
          </header>
          <div style={{ backgroundColor: "teal", flex: 1 }}></div>
          <footer className='App-footer'>
            <ResponsiveAppBar />
          </footer>
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
