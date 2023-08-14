import { MouseEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import {
  LastPage as LastPageIcon,
  FirstPage as FirstPageIcon,
  KeyboardArrowLeft as ArrowLeftIcon,
  KeyboardArrowRight as ArrowRightIcon,
} from "@mui/icons-material";

type TablePaginationActionsProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: MouseEvent<HTMLButtonElement>, newPage: number) => void;
};

const TablePaginationActions = (props: TablePaginationActionsProps) => {
  const { count, page, rowsPerPage } = props;
  const [searchParams, setSearchParams] = useSearchParams();

  const updatePageParam = (value: string) => {
    value === "0"
      ? searchParams.delete("page")
      : searchParams.set("page", value);
    setSearchParams(searchParams);
  };

  const handleFirstPageButtonClick = () => {
    updatePageParam("0");
  };

  const handleBackButtonClick = () => {
    updatePageParam((page - 1).toString());
  };

  const handleNextButtonClick = () => {
    updatePageParam((page + 1).toString());
  };

  const handleLastPageButtonClick = () => {
    updatePageParam(Math.max(0, Math.ceil(count / rowsPerPage) - 1).toString());
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <ArrowLeftIcon />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <ArrowRightIcon />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  );
};

export default TablePaginationActions;
