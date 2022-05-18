import * as React from "react"
import CardListFooter from "./CardListFooter"
import { SxProps, Theme } from "@mui/material"

const Footer = ({ sx }: { sx: SxProps<Theme> }) => {
  return (
    <footer className='App-footer'>
      <CardListFooter sx={sx} />
    </footer>
  )
}

export default Footer
