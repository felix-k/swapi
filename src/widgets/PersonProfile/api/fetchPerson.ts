import api from "@/shared/api/HttpService";
import { IPerson } from "@/shared/types";
import { PEOPLE_ENDPOINT } from "@/widgets/PeopleCard/api";

export const personKey = (id: string) => ["people", "details", { id }];

export async function fetchPerson(id: string) {
  const { data } = await api.get<IPerson>(`/${PEOPLE_ENDPOINT}/${id}`);

  return data;
}
