import { useMemo } from "react";
import { useDebounce } from "usehooks-ts";
import { useSearchParams } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { IPerson } from "@/shared/types";
import usePeopleData from "./usePeopleData";

import {
  PAGE_PARAM,
  SEARCH_PARAM,
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_INDEX,
} from "./api";

const useColumns = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"), {
    noSsr: true,
  });

  return useMemo(() => {
    const columns = [
      {
        header: "Name",
        accessorKey: "name",
        size: 180,
        enableHiding: true,
      },
      {
        header: "Height",
        accessorKey: "height",
        size: 140,
      },
      {
        header: "Mass",
        accessorKey: "mass",
        size: 140,
      },
      {
        header: "Birth year",
        accessorKey: "birthYear",
        size: 140,
      },
      {
        header: "Gender",
        accessorKey: "gender",
        size: 140,
      },
    ];

    return smallScreen ? columns.slice(0, 1) : columns;
  }, [smallScreen]);
};

const getRowId = (originalRow: IPerson): string => {
  return originalRow.url.match(/\/(\d+)\/$/)?.[1] as string;
};

const usePeopleTable = () => {
  const [searchParams] = useSearchParams();
  const columns = useColumns();

  const pageIndex = Number(searchParams.get(PAGE_PARAM)) || DEFAULT_PAGE_INDEX;
  const search = searchParams.get(SEARCH_PARAM);

  const state = useMemo(
    () => ({
      pagination: {
        pageIndex,
        pageSize: DEFAULT_PAGE_SIZE,
      },
    }),
    [pageIndex]
  );

  const options = useMemo(
    () => ({
      pageIndex,
      search,
    }),
    [search, pageIndex]
  );

  const { data, pageCount, loading } = usePeopleData(useDebounce(options));

  const table = useReactTable({
    data,
    columns,
    pageCount,
    state,
    getRowId: getRowId,
    getCoreRowModel: getCoreRowModel(),
  });

  return {
    table,
    loading,
  };
};

export default usePeopleTable;
