import api from "@/shared/api/HttpService";
import { IPeople } from "@/shared/types";
import { PeopleDataOptions } from "./types";
import { PAGE_PARAM, PEOPLE_ENDPOINT, SEARCH_PARAM } from "./constants";

export const peopleKey = ({ pageIndex, search }: PeopleDataOptions) => [
  "people",
  { pageIndex, search },
];

export async function fetchPeople({ pageIndex, search }: PeopleDataOptions) {
  const searchParams = new URLSearchParams(
    `${SEARCH_PARAM}=${search || ""}&${PAGE_PARAM}=${pageIndex + 1}`
  );

  if (!searchParams.get(SEARCH_PARAM)) searchParams.delete(SEARCH_PARAM);

  const { data } = await api.get<IPeople>(
    `/${PEOPLE_ENDPOINT}?${searchParams}`
  );

  return data;
}
