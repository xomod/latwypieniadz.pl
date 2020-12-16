import React from 'react';
import { LitteraProvider } from 'react-littera';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, useMediaQuery } from '@material-ui/core';

import { LOCALES } from "utils/language";
import { LIGHT_THEME, DARK_THEME } from "utils/theme";
import Routes from "./Routes";
import Navbar from './Navbar';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      !prefersDarkMode ? LIGHT_THEME : DARK_THEME,
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <LitteraProvider initialLocale="pl_PL" locales={LOCALES}>
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </LitteraProvider>
    </ThemeProvider>
  );
}

export default App;
