import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { PEOPLE_ROUTE } from "@/app/Router/constants";

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

const ErrorPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Box sx={styles.root}>
      <Typography variant="h3">ERROR {id}</Typography>
      <Typography variant="h4">Something went wrong!</Typography>
      <Button
        size="large"
        sx={{ mt: 2 }}
        variant="contained"
        onClick={() => navigate(PEOPLE_ROUTE)}
      >
        Go home
      </Button>
    </Box>
  );
};

export default ErrorPage;
