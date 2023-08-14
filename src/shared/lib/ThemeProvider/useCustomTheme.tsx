import { useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const useCustomTheme = () => {
  const [mode, setMode] = useLocalStorage<"light" | "dark">("mode", "light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(mode === "light" ? "dark" : "light");
      },
    }),
    [mode, setMode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light" && { background: { default: grey[100] } }),
        },
      }),
    [mode]
  );

  return { theme, colorMode };
};

export default useCustomTheme;
