import { useContext } from "react";
import { Button, useTheme } from "@mui/material";
import { ThemeContext } from "@/shared/lib/ThemeProvider";

const ColorModeButton = ({ sx }: { sx: object }) => {
  const theme = useTheme();
  const context = useContext(ThemeContext);

  return (
    <Button sx={sx} onClick={context.toggleColorMode}>
      {theme.palette.mode === "dark" ? "Light mode" : "Dark mode"}
    </Button>
  );
};

export default ColorModeButton;
