import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { ErrorBoundary } from "@/shared/lib";
import { PersonCard } from "@/widgets";
import { PEOPLE_ROUTE } from "@/app/Router/constants";

const PersonPage = () => {
  const navigate = useNavigate();

  return (
    <ErrorBoundary>
      <Button sx={{ mb: 2 }} onClick={() => navigate(PEOPLE_ROUTE)}>
        Home
      </Button>
      <PersonCard />
    </ErrorBoundary>
  );
};

export default PersonPage;
