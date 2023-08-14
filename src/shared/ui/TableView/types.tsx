import { Table } from "@tanstack/react-table";

export interface TableViewProps<T extends object> {
  table: Table<T>;
}
