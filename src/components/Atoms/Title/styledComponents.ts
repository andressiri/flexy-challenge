import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: "60px",
  fontWeight: 800,
}));
