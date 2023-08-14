import IPerson from "./Person";

export default interface IPeople {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPerson[];
}
