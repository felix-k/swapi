import { ColorModeButton } from "@/shared/ui";
import { ErrorBoundary } from "@/shared/lib";
import { PeopleCard } from "@/widgets";

const PeoplePage = () => {
  return (
    <ErrorBoundary>
      <ColorModeButton sx={{ mb: 2 }} />
      <PeopleCard />
    </ErrorBoundary>
  );
};

export default PeoplePage;
