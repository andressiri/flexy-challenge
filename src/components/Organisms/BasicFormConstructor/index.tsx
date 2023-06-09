import { FC } from "react";
import { StyledButton } from "../../Atoms";
import { FormField } from "../../Molecules";
import { Container, Loader } from "./styledComponents";
import { IFormProps, IFormFieldSpecifics } from "../../../typings/forms";

const BasicFormConstructor: FC<IFormProps> = ({
  formData,
  formVisited,
  formFieldsSpecificsArray,
  handleVisited,
  handleOnChange,
  handleSubmit,
  disableSubmit,
  formIsLoading,
  buttonText,
  children,
}) => {
  return (
    <Container
      component="form"
      onSubmit={(e: React.FormEvent<HTMLDivElement>) => handleSubmit(e)}
    >
      {formFieldsSpecificsArray.map((field: IFormFieldSpecifics, id) => {
        return (
          <FormField
            type={field.type}
            required={field.required}
            disabled={field.disabled}
            select={field.select}
            multiline={field.multiline}
            rows={field.rows}
            error={field.error}
            helperText={field.helperText}
            conditionalHelperText={field.conditionalHelperText}
            InputProps={field.InputProps}
            onChange={(
              e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ) => handleOnChange(e)}
            field={field.field}
            label={field.label}
            placeholder={field.placeholder}
            formData={formData}
            formVisited={formVisited}
            handleVisited={handleVisited}
            key={`${buttonText}${field.field}${id}`}
          >
            {field.children}
          </FormField>
        );
      })}
      {children}
      <StyledButton
        type="submit"
        disabled={disableSubmit}
        sx={{ width: "100%", maxWidth: "352px" }}
      >
        {formIsLoading ? <Loader /> : buttonText}
      </StyledButton>
    </Container>
  );
};

export default BasicFormConstructor;
