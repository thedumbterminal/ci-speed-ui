import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { NavLink } from 'react-router-dom'
import useSWR from 'swr'
import { useProjectId } from '../lib/project'
import { Api } from '../lib/api'

const drawerWidth = 240

interface DrawerProps {
  open: boolean
  setOpen: Function
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const _getProject = () => {
  const projectId = useProjectId()

  const { data, error } = useSWR(
    `/projects/${projectId.toString()}`,
    Api.simpleGet,
  )
  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

const PersistentDrawerLeft = ({ open, setOpen }: DrawerProps) => {
  const theme = useTheme()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const { data, error, isLoading } = _getProject()
  if (error) throw error

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="h1" sx={{ flexGrow: 1 }}>
            CI-Speed
          </Typography>
          {!isLoading && data && (
            <Typography align="right" variant="h6" noWrap component="h2">
              [
              <Link
                title="View repository on GitHub"
                underline="hover"
                variant="inherit"
                color="inherit"
                href={data.vcs_url}
                rel="noopener"
                target="_blank"
              >
                {data.name}
              </Link>
              ]
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <NavLink to="/">
            <ListItem button key="Home">
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>
          <NavLink to="/summary">
            <ListItem button key="Summary">
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Summary" />
            </ListItem>
          </NavLink>
          <NavLink to="/analyse">
            <ListItem button key="Analyse">
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Analyse" />
            </ListItem>
          </NavLink>
          <NavLink to="/project">
            <ListItem button key="Detail">
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Detail" />
            </ListItem>
          </NavLink>
        </List>
        <Divider />
        <List>
          <NavLink to="/choose_project">
            <ListItem button key="ChooseProject">
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Choose Project" />
            </ListItem>
          </NavLink>
          <NavLink to="/add_project">
            <ListItem button key="AddProject">
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Add Project" />
            </ListItem>
          </NavLink>
          <NavLink to="/account">
            <ListItem button key="Account">
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
          </NavLink>
          <NavLink to="/api_key">
            <ListItem button key="ApiKey">
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="API Key" />
            </ListItem>
          </NavLink>
        </List>
        <Divider />
        <List>
          <a href="/doc" target="_blank">
            <ListItem button key="API">
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="API" />
            </ListItem>
          </a>
        </List>
      </Drawer>
    </>
  )
}

export { DrawerHeader, PersistentDrawerLeft, drawerWidth }
