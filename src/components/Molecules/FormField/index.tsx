import { FC, useState } from "react";
import { StyledTextField } from "../../../components/Atoms";
import { Container, EyeIconContainer } from "./styledComponents";
import { FormFieldProps } from "../../../typings/forms";
import eyeIcon from "../../../assets/eye-icon.svg";

type DynamicPassword = "password" | "text";

const FormField: FC<FormFieldProps> = ({
  type = "text",
  required = false,
  disabled = false,
  select = false,
  multiline = false,
  rows = 1,
  error,
  helperText = "",
  conditionalHelperText = true,
  InputProps,
  onChange,
  children,
  field,
  label,
  placeholder,
  formData,
  formVisited,
  handleVisited,
}) => {
  const [dynamicType, setDynamicType] = useState<DynamicPassword>("password");
  const isPassword = type === "password";

  const setPasswordVisibility = () => {
    setDynamicType((prev: DynamicPassword) => {
      return prev === "password" ? "text" : "password";
    });
  };

  return (
    <Container>
      <StyledTextField
        type={isPassword ? dynamicType : type}
        required={required}
        disabled={disabled}
        select={select}
        multiline={multiline}
        rows={rows}
        error={
          error ||
          ((formVisited
            ? formVisited[field as keyof typeof formVisited]
            : true) &&
            !formData[field as keyof typeof formData] &&
            required)
        }
        helperText={helperText}
        conditionalHelperText={conditionalHelperText}
        InputProps={InputProps}
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => onChange(e)}
        onBlur={(e) => {
          if (handleVisited) handleVisited(e);
        }}
        value={formData[field as keyof typeof formData] as string | undefined}
        name={field}
        label={label}
        placeholder={placeholder}
        variant="outlined"
        InputLabelProps={
          formData[field as keyof typeof formData] ? { shrink: true } : {}
        }
      >
        {children}
      </StyledTextField>
      {isPassword && (
        <EyeIconContainer
          dynamicType={dynamicType}
          onClick={setPasswordVisibility}
        >
          <img src={eyeIcon} alt="Show password" width={24} height={24} />
        </EyeIconContainer>
      )}
    </Container>
  );
};

export default FormField;
