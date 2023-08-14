import { useTracked } from "@/shared/lib/DialogProvider/DialogContext";

const useDialogListItem = (name: string) => {
  const [state] = useTracked();

  const handleClick = () => state[name]?.toggleOpen();

  return handleClick;
};

export default useDialogListItem;
