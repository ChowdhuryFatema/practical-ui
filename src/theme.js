import { createTheme } from '@mui/material/styles';
import {colors, typography} from './designTokens';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    }
  },
  typography: {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
  }

});


export default theme;