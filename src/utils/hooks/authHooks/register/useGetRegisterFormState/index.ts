import { useState } from "react";
import { useHandleFormChange, useHandleFormVisited } from "../../..";
import {
  IRegisterFormData,
  IRegisterFormVisited,
} from "../../../../../typings/users";

const useGetRegisterFormState = () => {
  const [formData, setFormData] = useState<IRegisterFormData>({
    fullName: "",
    phone: "",
    email: "",
    password: "",
  });
  const [formVisited, setFormVisited] = useState<IRegisterFormVisited>({
    fullName: false,
    phone: false,
    email: false,
    password: false,
  });

  const handleOnChange = useHandleFormChange({ formData, setFormData });

  const handleVisited = useHandleFormVisited({ formVisited, setFormVisited });

  return {
    formData,
    setFormData,
    handleOnChange,
    formVisited,
    setFormVisited,
    handleVisited,
  };
};

export default useGetRegisterFormState;
