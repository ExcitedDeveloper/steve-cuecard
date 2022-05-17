import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const ResponsiveFooter = () => {
  return (
    <footer
      style={{
        backgroundColor: "pink",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth='xl'>
        <Box>
          <Typography textAlign='center'>Copyright...</Typography>
        </Box>
      </Container>
    </footer>
  )
}

export default ResponsiveFooter
