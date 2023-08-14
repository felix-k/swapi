import { Box, Skeleton } from "@mui/material";

const Placeholder = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Skeleton sx={{ my: 2 }} animation={false} />
      <Skeleton sx={{ my: 2 }} animation={false} />
      <Skeleton sx={{ my: 2 }} animation={false} />
    </Box>
  );
};

export default Placeholder;
