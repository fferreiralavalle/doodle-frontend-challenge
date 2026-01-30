import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import COLORS from './colors';

export const generalStyles: ThemeOptions = {
  palette: {
    primary: {
      main: COLORS.black,
    },
    secondary: {
      main: COLORS.grey,
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily:
      'var(--font-primary, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif)',
  },
};

export const componentStyles: ThemeOptions['components'] = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        minWidth: 'unset',
        textTransform: 'capitalize',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  },
  MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.white,
		  borderRadius: 4,
		  '.MuiInputBase-input': {
		  	borderRadius: 4,
		  }
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: COLORS.black,
        },
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.black,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.black,
          },
        },
      },
    },
};

const theme = createTheme({
  ...generalStyles,
  components: componentStyles,
});

export default theme;
