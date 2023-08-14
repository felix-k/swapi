import { ListItem, ListItemText, ListItemButton } from "@mui/material";
import useDialogListItem from "./useDialogListItem";

const DialogListItem = ({
  primary,
  secondary,
  divider,
  value,
  readOnly,
  component: Component,
}) => {
  const handleClick = useDialogListItem(Component.dialogName);

  return (
    <>
      {readOnly ? (
        <ListItem
          divider={divider}
          sx={{ height: (theme) => theme.spacing(9) }}
        >
          <ListItemText
            primary={primary}
            secondary={secondary}
            secondaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      ) : (
        <ListItem
          disablePadding
          divider={divider}
          sx={{ height: (theme) => theme.spacing(9) }}
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText
              primary={primary}
              secondary={secondary}
              secondaryTypographyProps={{ noWrap: true }}
            />
          </ListItemButton>
        </ListItem>
      )}
      <Component value={value} />
    </>
  );
};

export default DialogListItem;
