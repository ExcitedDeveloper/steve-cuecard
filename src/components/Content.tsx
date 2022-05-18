import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import CardList from "./CardList"

const Content = () => {
  return (
    <Container style={{ flex: 1 }}>
      <CardList />
    </Container>
  )
}

export default Content
