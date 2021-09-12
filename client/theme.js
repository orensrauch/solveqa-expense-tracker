import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#4f83cc',
        main: '#0f9711',
        dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c6463b',
      main: '#69f0ae',
      dark: '#2bbd7e',
      contrastText: '#000',
    },
      openTitle: '#f06b69',
      protectedTitle: '#2bbd7e',
      type: 'light'
    }
  })

  export default theme