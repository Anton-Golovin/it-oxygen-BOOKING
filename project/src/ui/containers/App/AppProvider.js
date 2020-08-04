// Core
import React, { Suspense } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Parts
import App from './App';
import Loading from '../../components/Loading/Loading';

function AppProvider() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#fccbfd',
        main: '#e88efd',
        dark: '#7a478e',
        contrastText: '#fff',
      },
      secondary: {
        light: '#72aec9',
        main: '#568da7',
        dark: '#294453',
        contrastText: '#fff',
      },
      error: red,
    },
    overrides: {},
    typography: {},
    shape: {},
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Suspense fallback={<Loading isLoading />}>
        <App />
      </Suspense>
    </MuiThemeProvider>
  );
}

export default AppProvider;
