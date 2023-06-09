import { FC } from "react";
import { Link } from "react-router-dom";
import { FormTitles, ImageUpload } from "../../Molecules";
import { BasicFormConstructor } from "../../Organisms";
import {
  Container,
  FormContainer,
  FormInnerContainer,
  BottomText,
  StyledImage,
} from "./styledComponents";
import { FormsComponentsProps } from "../../../typings/forms";
import loginImage from "../../../assets/login-picture.png";

interface Props extends FormsComponentsProps {
  bottomText: string;
  bottomLink: string;
  bottomLinkText: string;
  children?: JSX.Element | JSX.Element[];
}

const FormWithPicturePage: FC<Props> = ({
  title,
  subtitle,
  imageProps,
  formProps,
  bottomText,
  bottomLink,
  bottomLinkText,
  children,
}) => {
  return (
    <Container component="section">
      <FormContainer>
        <FormInnerContainer>
          <FormTitles title={title} subtitle={subtitle} />
          {imageProps && <ImageUpload {...imageProps} />}
          <BasicFormConstructor {...formProps}>{children}</BasicFormConstructor>
          <BottomText>
            {bottomText}{" "}
            <span>
              <Link to={bottomLink}>{bottomLinkText}</Link>
            </span>
          </BottomText>
        </FormInnerContainer>
      </FormContainer>
      <StyledImage
        src={loginImage}
        alt="Login image"
        width={950}
        height={950}
      />
    </Container>
  );
};

export default FormWithPicturePage;
