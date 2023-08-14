import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    p: 2,
  },
};

const Layout = () => {
  return (
    <Box sx={styles.root}>
      <Outlet />
    </Box>
  );
};

export default Layout;
