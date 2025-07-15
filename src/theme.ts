import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#CDFD82', // Main color (light green)
      dark: '#295D4A', // Button/accent color (dark green)
    },
    secondary: {
      main: '#295D4A', // Dark green for buttons and accents
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#666666', // Secondary text (e.g., for descriptions)
    },
    background: {
      default: '#FFFFFF', // White background
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.125rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      textTransform: 'none', // Don't uppercase button text
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
        },
        contained: {
          backgroundColor: '#295D4A',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#1e4535',
          },
        },
        outlined: {
          borderColor: '#295D4A',
          color: '#295D4A',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 25,
            backgroundColor: '#F5F5F5',
          },
        },
      },
    },
  },
});

export default theme;
