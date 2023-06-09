import { FC } from "react";
import { SwipeableDrawerProps } from "@mui/material";
import { LogButtons } from "../../../components/Organisms";
import CloseIcon from "@mui/icons-material/Close";
import {
  StyledSwipeableDrawer,
  CloseContainer,
  StyledIconButton,
} from "./styledComponents";

const MobileDrawer: FC<SwipeableDrawerProps> = (props) => {
  return (
    <StyledSwipeableDrawer {...props} anchor="right">
      <CloseContainer isDrawerOpen={props.open} appearingTime={700}>
        <StyledIconButton onClick={(e) => props.onClose(e)}>
          <CloseIcon />
        </StyledIconButton>
      </CloseContainer>
      <LogButtons isDrawer={true} />
    </StyledSwipeableDrawer>
  );
};

export default MobileDrawer;
