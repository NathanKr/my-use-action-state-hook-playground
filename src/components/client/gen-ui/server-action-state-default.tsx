import { IServerActionStateDefault } from "@/types/types";
import { FC } from "react";
import ServerActionStateGen from "./server-action-state-gen";
import { Alert, CircularProgress } from "@mui/material";

const ServerActionStateDefault: FC<IServerActionStateDefault> = ({
  isPending,
  error,
  successComponent,
}) => {
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
      error={error}
    />
  );
};

export default ServerActionStateDefault;
