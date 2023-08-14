import { useState } from "react";
import { createContainer } from "react-tracked";

const useDialogState = () => useState({});

export const { Provider, useTracked, useUpdate } =
  createContainer(useDialogState);
