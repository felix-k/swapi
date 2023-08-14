import { ReactNode } from "react";
import { Provider } from "./DialogContext";

const DialogProvider = ({ children }: { children: ReactNode }) => {
  return <Provider>{children}</Provider>;
};

export default DialogProvider;
