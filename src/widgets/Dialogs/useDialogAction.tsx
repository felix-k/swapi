import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { IPerson } from "@/shared/types";
import { personKey } from "../PersonProfile/api";

const useDialogAction = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const handleAction = (person: IPerson) => {
    queryClient.setQueryData(personKey(id as string), person);
  };

  return handleAction;
};

export default useDialogAction;
