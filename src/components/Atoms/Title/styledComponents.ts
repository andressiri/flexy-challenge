import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const StyledTitle = styled(Typography)(({ theme }) => ({
  maxWidth: "calc(100% - 60px)",
  color: theme.palette.primary.dark,
  textAlign: "center",
  fontSize: "60px",
  fontWeight: 800,
  "@media (max-width: 1200px)": {
    fontSize: "calc(60px - (1200px - 100vw) * 0.03)",
  },
}));
