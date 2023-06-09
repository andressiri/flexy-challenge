import { useContext } from "react";
import { UsersContext } from "../../../contexts";
import { StyledFormGroup, RememberLabel } from "./styledComponents";
import { Checkbox } from "@mui/material";

const RememberMe = () => {
  const { remember } = useContext(UsersContext);

  const handleRemember = (
    _e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (checked) {
      remember.current = true;
      return;
    }

    remember.current = false;
  };

  return (
    <StyledFormGroup>
      <RememberLabel
        control={<Checkbox onChange={handleRemember} />}
        label="Recordarme"
      />
    </StyledFormGroup>
  );
};

export default RememberMe;
