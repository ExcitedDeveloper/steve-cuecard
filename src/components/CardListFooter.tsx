import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import { SxProps, Theme } from "@mui/material"
import Button from "@mui/material/Button"

const CardListFooter = ({ sx }: { sx: SxProps<Theme> }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const pages = ["New Card", "Edit Card", "Delete Card"]

  return (
    <AppBar position='static'>
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              width: 1,
              position: "left",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size='medium'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={[
                {
                  display: { xs: "block", md: "none" },
                },
                ...(Array.isArray(sx) ? sx : [sx]),
              ]}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              width: 1,
              position: "left",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ width: 1, display: "flex", justifyContent: "right" }}>
            <Button
              sx={{
                my: 2,
                color: "white",
              }}
            >
              Study
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default CardListFooter
