import { useNavigate } from "react-router-dom";
import { flexRender } from "@tanstack/react-table";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TablePagination,
} from "@mui/material";

import Placeholder from "./Placeholder";
import TablePaginationActions from "./PaginationActions";
import { TableViewProps } from "./types";

const TableView = <T extends object>(props: TableViewProps<T>) => {
  const { table } = props;
  const navigate = useNavigate();

  if (table.options.data.length === 0) return <Placeholder />;

  return (
    <>
      <TableContainer>
        <Table aria-labelledby="tableTitle" size={"medium"}>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => {
                  return (
                    <TableCell
                      sx={{ width: header.getSize() }}
                      key={header.id}
                      colSpan={header.colSpan}
                      align={index ? "right" : "left"}
                    >
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => {
              return (
                <TableRow
                  hover
                  key={row.id}
                  tabIndex={-1}
                  sx={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate(`${row.id}`, { state: { row: row.original } })
                  }
                >
                  {row.getVisibleCells().map((cell, index) => {
                    return (
                      <TableCell key={cell.id} align={index ? "right" : "left"}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        page={table.getState().pagination.pageIndex}
        count={table.getPageCount()}
        rowsPerPage={table.getState().pagination.pageSize}
        rowsPerPageOptions={[-1]}
        onPageChange={(_: unknown, newPage: number) =>
          table.setPageIndex(newPage)
        }
        ActionsComponent={TablePaginationActions}
      />
    </>
  );
};

export default TableView;
