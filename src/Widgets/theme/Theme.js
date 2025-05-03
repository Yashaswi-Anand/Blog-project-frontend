import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    horizontalDivider: '#00bcd4',
    background: {
      default: '#f4f6f8',
      paper: '#ffffff' ,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    horizontalDivider: '#ffffff',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});