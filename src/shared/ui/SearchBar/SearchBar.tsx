import { useDebounce } from "usehooks-ts";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { SxProps } from "@mui/system";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  height: theme.spacing(6),
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  position: "absolute",
  left: theme.spacing(1.5),
  height: "100%",
}));

const ClearIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  right: theme.spacing(2),
  height: "100%",
}));

const InputWrapper = styled(InputBase)(({ theme }) => ({
  flex: 1,
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const SearchBar = ({ sx }: { sx?: SxProps }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState<string>(searchParams.get("search") || "");
  const debouncedValue = useDebounce<string>(value, 500);
  const refChange = useRef<boolean>(false);

  useEffect(() => {
    if (!refChange.current) return;

    if (debouncedValue === "") {
      deleteSearchParams();
      refChange.current = false;
      return;
    }

    searchParams.set("search", debouncedValue);
    searchParams.delete("page");
    setSearchParams(searchParams);
    refChange.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    refChange.current = true;
  };

  const focusSearch = () => {
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const resetSearch = () => {
    setValue("");
    deleteSearchParams();
  };

  const deleteSearchParams = () => {
    searchParams.delete("search");
    searchParams.delete("page");
    setSearchParams(searchParams);
  };

  const handleClear = () => {
    focusSearch();
    setTimeout(() => resetSearch(), 0);
  };

  return (
    <Search sx={sx}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputWrapper
        value={value}
        inputRef={inputRef}
        placeholder={"Search"}
        onChange={handleChange}
      />
      {value && (
        <ClearIconWrapper>
          <IconButton
            edge="end"
            size="medium"
            color="inherit"
            onClick={handleClear}
          >
            <CloseIcon />
          </IconButton>
        </ClearIconWrapper>
      )}
    </Search>
  );
};

export default SearchBar;
