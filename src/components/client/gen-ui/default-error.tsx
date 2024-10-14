import { isDevelopment } from "@/logic/utils";
import { Alert } from "@mui/material";
import React, { FC } from "react";

const DefaultError: FC<Error> = ({ name, message, stack }) => {
  return (
    <Alert severity="error">
      {name && <p>Name : {name}</p>}
      {message && <p>Message : {message}</p>}
      {isDevelopment() && stack && <p>Stack trace : {stack}</p>}
    </Alert>
  );
};

export default DefaultError;
