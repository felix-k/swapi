import { ReactNode } from "react";
import {
  Compose,
  ThemeProvider,
  DialogProvider,
  ReactQueryProvider,
} from "@/shared/lib";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Compose components={[ReactQueryProvider, ThemeProvider, DialogProvider]}>
      {children}
    </Compose>
  );
};

export default Providers;
