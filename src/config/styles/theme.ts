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
};

const theme = createTheme({
  ...generalStyles,
  components: componentStyles,
});

export default theme;
