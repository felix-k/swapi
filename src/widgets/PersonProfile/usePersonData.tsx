import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { personKey, fetchPerson } from "./api";
import camelize from "camelize-ts";

const usePlaceholderData = () => {
  const location = useLocation();
  return location.state?.row;
};

const usePersonData = (id: string) => {
  const placeholderData = usePlaceholderData();

  const dataQuery = useQuery({
    queryKey: personKey(id),
    queryFn: () => fetchPerson(id),
    select: (data) => camelize(data),
    placeholderData,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  const defaultData = useMemo(() => Object.create({}), []);

  return {
    data: dataQuery.data ?? defaultData,
    loading: dataQuery.isFetching,
  };
};

export default usePersonData;
