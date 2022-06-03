import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f50b5',
    },
    secondary: {
      main: '#683fb5',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
