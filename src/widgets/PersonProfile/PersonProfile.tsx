import { List } from "@mui/material";
import { Films } from "@/widgets/Dialogs/FilmsDialog";
import { DialogListItem } from "@/shared/ui";
import { IPerson } from "@/shared/types";
import {
  NameDialog,
  HeightDialog,
  MassDialog,
  BirthDialog,
  GenderDialog,
  FilmsDialog,
} from "@/widgets/Dialogs";

const PersonProfile = ({ person }: { person: IPerson }) => {
  const readOnly = Object.keys(person).length === 0;

  return (
    <List disablePadding>
      <DialogListItem
        divider
        primary={"Name"}
        secondary={person?.name}
        component={NameDialog}
        readOnly={readOnly}
        value={person}
      />
      <DialogListItem
        divider
        primary={"Height"}
        secondary={person?.height}
        component={HeightDialog}
        readOnly={readOnly}
        value={person}
      />
      <DialogListItem
        divider
        primary={"Mass"}
        secondary={person?.mass}
        component={MassDialog}
        readOnly={readOnly}
        value={person}
      />
      <DialogListItem
        divider
        primary={"Birth"}
        secondary={person?.birthYear}
        component={BirthDialog}
        readOnly={readOnly}
        value={person}
      />
      <DialogListItem
        divider
        primary={"Gender"}
        secondary={person?.gender}
        component={GenderDialog}
        readOnly={readOnly}
        value={person}
      />
      <DialogListItem
        divider
        primary={"Films"}
        secondary={Films.getFilmNamesByUrls(person.films)}
        component={FilmsDialog}
        readOnly={readOnly}
        value={person}
      />
    </List>
  );
};

export default PersonProfile;
