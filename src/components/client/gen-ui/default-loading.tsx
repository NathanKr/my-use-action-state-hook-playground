import { CircularProgress } from "@mui/material";
import React from "react";

const DefaultLoading = () => {
  return (
    <p>
      Loading ...
      <CircularProgress />
    </p>
  );
};

export default DefaultLoading;
