'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#f97316' },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
    background: {
      default: '#0f0f0f',
      paper: '#1a1a1a',
    },
    divider: 'rgba(255,255,255,0.08)',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: { backgroundColor: '#1e1e1e', backgroundImage: 'none' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundColor: '#1e1e1e', backgroundImage: 'none' },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: { backgroundColor: '#1e1e1e', backgroundImage: 'none' },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
            '&:hover fieldset': { borderColor: '#f97316' },
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: { backgroundColor: '#1e1e1e', backgroundImage: 'none' },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: { color: '#f1f5f9' },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: { color: '#94a3b8' },
      },
    },
  },
});

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
export default Theme;