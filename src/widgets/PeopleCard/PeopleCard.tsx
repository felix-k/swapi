import { Paper, Typography } from "@mui/material";
import { IPerson } from "@/shared/types";
import { DebouncedProgress, SearchToolbar, TableView } from "@/shared/ui";
import usePeopleTable from "./usePeopleTable";

const PeopleCard = () => {
  const { table, loading } = usePeopleTable();

  return (
    <Paper sx={{ maxWidth: "md", width: 1 }}>
      <Typography p={2} align={"center"} variant="h5">
        StarWars Heroes
      </Typography>
      <SearchToolbar></SearchToolbar>
      <DebouncedProgress loading={loading} />
      <TableView<IPerson> table={table}></TableView>
    </Paper>
  );
};

export default PeopleCard;
