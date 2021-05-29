import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffcccb',
      dark: '#ba6b6c',
      main: '#ef9a9a',
      contrastText: 'black',
    },
    secondary:{
      light: '#f75d46',
      main: '#e4472f',
      dark: '#bf2f19',
      contrastText: 'white',
    },
    background: {
      default: 'white',
    }
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
  //   button: {
  //     textTransform: 'none'
  //   }
  }
});

export default theme;