import { IServerActionStateDefault } from "@/types/types";
import { FC } from "react";
import ServerActionStateGen from "./server-action-state-gen";
import { Alert, CircularProgress } from "@mui/material";


const ServerActionStateDefault: FC<IServerActionStateDefault<unknown>> = ({
  isPending,
  state,
  successComponent,
}) => {
  const {error} = state;

  const loadingComponent = (
    <p>
      Loading ...
      <CircularProgress />
    </p>
  );

  const errorComponent = (
    <Alert severity="error">Error: {error?.message}</Alert>
  );
  return (
    <ServerActionStateGen
      successComponent={successComponent}
      errorComponent={errorComponent}
      loadingComponent={loadingComponent}
      isPending={isPending}
      state={state}
      dataOnSuccessCanBeNull = {false} // --- by default data on success can not be null
    />
  );
};

export default ServerActionStateDefault;
