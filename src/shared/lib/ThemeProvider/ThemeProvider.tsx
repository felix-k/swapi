import { ReactNode } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useCustomTheme from "./useCustomTheme";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, colorMode } = useCustomTheme();

  return (
    <ThemeContext.Provider value={colorMode}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
