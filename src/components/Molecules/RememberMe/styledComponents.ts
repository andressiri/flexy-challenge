import { styled } from "@mui/material/styles";
import { FormControlLabel, FormGroup } from "@mui/material";

export const StyledFormGroup = styled(FormGroup)(() => ({
  margin: "-12px auto 12px auto",
  display: "flex",
  alignItems: "center",
}));

export const RememberLabel = styled(FormControlLabel)(() => ({
  "& svg": {
    width: "28px",
    height: "28px",
  },
  "& span": {
    fontSize: "18px",
    fontWeight: 600,
  },
}));
