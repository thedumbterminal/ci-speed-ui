import { PersistentDrawerLeft, DrawerHeader, drawerWidth } from './TopNav'
import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

interface LayoutProps {
  children: React.ReactNode
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

const Layout = (props: LayoutProps) => {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const wideScreen = useMediaQuery(theme.breakpoints.up('md'))
  const [defaultedMenu, setDefaultedMenu] = React.useState(false)
  if (wideScreen && !defaultedMenu) {
    console.debug('Defaulting menu to open for wide screens')
    setOpen(true)
    setDefaultedMenu(true)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <PersistentDrawerLeft open={open} setOpen={setOpen} />
      <Main open={open}>
        <DrawerHeader />
        {props.children}
      </Main>
    </Box>
  )
}

export default Layout
