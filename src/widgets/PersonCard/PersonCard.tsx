import { Divider, Paper, Typography } from "@mui/material";
import { PersonProfile } from "../PersonProfile";
import usePersonProfile from "../PersonProfile/usePersonProfile";

const ProfileCard = () => {
  const { person } = usePersonProfile();

  return (
    <Paper sx={{ maxWidth: "md", width: 1 }}>
      <Typography p={2} align={"center"} variant="h5">
        Hero Profile
      </Typography>
      <Divider />
      <PersonProfile person={person} />
    </Paper>
  );
};

export default ProfileCard;
