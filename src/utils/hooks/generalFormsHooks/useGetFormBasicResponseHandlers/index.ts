import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTE } from "../../../../config/constants";

const useGetFormBasicResponseHandlers = () => {
  const [keepLoading, setKeepLoading] = useState(false);
  const navigate = useNavigate();

  const errorAction = () => setKeepLoading(false);

  const successAction = () => navigate(`/${DASHBOARD_ROUTE}`);

  return {
    errorAction,
    successAction,
    keepLoading,
    setKeepLoading,
  };
};

export default useGetFormBasicResponseHandlers;
