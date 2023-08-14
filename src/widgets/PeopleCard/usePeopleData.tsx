import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { peopleKey, fetchPeople, PeopleDataOptions } from "./api";
import camelize from "camelize-ts";

const usePeopleData = (options: PeopleDataOptions) => {
  const dataQuery = useQuery({
    queryKey: peopleKey(options),
    queryFn: () => fetchPeople(options),
    select: (data) => camelize(data),
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 30000,
  });

  const defaultData = useMemo(() => [], []);

  return {
    data: dataQuery.data?.results ?? defaultData,
    pageCount: dataQuery.data?.count ?? -1,
    loading: dataQuery.isFetching,
  };
};

export default usePeopleData;
