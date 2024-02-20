import { Pagination, Stack } from "@mui/material";

const ChangePageNumButton = (props) => {
  const totalPageNum = props.totalPageNum;
  const setPageNum = props.setPageNum;
  const numOfDisplaysPerPage = props.numOfDisplaysPerPage;
  return (
    <Stack spacing={2} alignItems="center" justifyContent="center">
      <Pagination
        count={Math.ceil(totalPageNum / numOfDisplaysPerPage)}
        variant="outlined"
        shape="rounded"
        size="large"
        onChange={(e, page) => {
          setPageNum(page - 1);
        }}
      />
    </Stack>
  );
};

export default ChangePageNumButton;
