import { useMediaQuery } from "@mui/material";
import { useTracked } from "@/shared/lib/DialogProvider/DialogContext";

const useDialogForm = (name: string) => {
  const smallScreen = useMediaQuery("(min-width:600px)");
  const [state] = useTracked();

  return {
    open: state[name]?.open,
    close: state[name]?.toggleOpen,
    fullWidth: smallScreen,
    fullScreen: !smallScreen,
  };
};

export default useDialogForm;
