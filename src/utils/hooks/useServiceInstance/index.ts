import { useCallback, useState } from "react";
// import {
//   makeRequest,
//   requestWithAuth,
//   requestWithImage,
// } from "../../../utils/helpers";
import {
  ExecuteProps,
  IHandleResponseOptions,
} from "../../../typings/services";
import useHandleResponseEffect from "../useHandleResponseEffect";
import { useMockRequest } from "..";

const useServiceInstance = (responseOptions: IHandleResponseOptions) => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const mockRequest = useMockRequest();

  useHandleResponseEffect({
    ...responseOptions,
    serviceState: {
      isError,
      setIsError,
      isSuccess,
      setIsSuccess,
      message,
      setMessage,
    },
  });

  const executeRequest = useCallback(
    async ({
      route,
      baseUrl,
      data,
      method,
      contentType,
      headers,
      setState,
    }: // type = "basic",
    ExecuteProps) => {
      const notGetRequest = method && method !== "GET";

      setIsLoading(true);

      try {
        const requestObj = {
          route,
          baseUrl,
          data,
          method,
          contentType,
          headers,
        };

        const response = mockRequest(requestObj);
        // This should be the helpers actually called if there was API
        // type === "basic"
        //   ? await makeRequest(requestObj)
        //   : type === "withAuth" || type === "withAuthAndImage"
        //   ? await requestWithAuth({ ...requestObj, type })
        //   : await requestWithImage(requestObj);

        if (setState) setState(response.data);

        if (notGetRequest) setMessage(response.message);
        setIsSuccess(true);
      } catch (err) {
        setMessage(`${err}`);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, mockRequest]
  );

  return {
    executeRequest,
    isError,
    isSuccess,
    isLoading,
    message,
  };
};

export default useServiceInstance;
