import { useState, useEffect } from 'react';
import { CssBaseline, useMediaQuery, Box } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import Navbar from '../Navbar';
import { lightTheme, darkTheme, rootStyle } from './LayoutStyles';

export default function MaterialLayout({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useState(prefersDarkMode ? darkTheme : lightTheme);

  useEffect(() => {
    setTheme(prefersDarkMode ? darkTheme : lightTheme);
  }, [prefersDarkMode]);

  const toggleColorMode = () => {
    setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div sx={rootStyle(theme)}>
        <Navbar toggleColorMode={toggleColorMode} />
        <Box sx={{ textAlign: 'center', my: 2, color: 'red', fontWeight: 'bold' }}>
          TESTING ONLY - INFO IS OUTDATED
        </Box>
        {/* <Paper sx={paperStyle(theme)}>{children}</Paper> */}
        <Box sx={{ my: { xs: 0, sm: 2 } }}>
          {children}
        </Box>
      </div>
    </ThemeProvider>
  );
}
