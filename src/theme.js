// src/theme.ts
import { createTheme } from '@mui/material/styles';
var theme = createTheme({
    palette: {
        primary: { main: '#00bfa5' }, // טורקיז
        secondary: { main: '#1976d2' }, // כחול
        error: { main: '#f44336' },
        background: { default: '#f4f6f8' },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});
export default theme;
