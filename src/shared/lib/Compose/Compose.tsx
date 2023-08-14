import { FC, ReactNode } from "react";

interface Props {
  components: Array<FC<{ children: ReactNode }>>;
  children: ReactNode;
}

const Compose = ({ components = [], children }: Props) => {
  return (
    <>
      {components.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
};

export default Compose;
