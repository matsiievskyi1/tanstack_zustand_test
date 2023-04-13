import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useFilter } from "./store";

export const Filter = () => {
  const filter = useFilter((state) => state.filter);
  const setFilter = useFilter((state) => state.setFilter);

  return (
    <Box>
      <Button onClick={() => setFilter("all")} disabled={filter === "all"}>
        All
      </Button>
      <Button onClick={() => setFilter("not completed")} disabled={filter === "not completed"}>
        Not Completed
      </Button>
      <Button onClick={() => setFilter("completed")} disabled={filter === "completed"}>
        Completed
      </Button>
    </Box>
  );
};
