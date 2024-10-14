import { IServerActionStateDefault } from "@/types/server-actions";
import { FC } from "react";
import ServerActionStateGen from "./server-action-state-gen";
import DefaultLoading from "./default-loading";
import DefaultError from "./default-error";

const ServerActionStateDefault: FC<IServerActionStateDefault<unknown>> = ({
  isPending,
  state,
  successComponent,
}) => {
  const { error } = state;
  const loadingComponent = <DefaultLoading />;
  const errorComponent = (
    <DefaultError
      name={error?.name ?? ""}
      message={error?.message ?? ""}
      stack={error?.stack}
    />
  );
  return (
    <ServerActionStateGen
      successComponent={successComponent}
      errorComponent={errorComponent}
      loadingComponent={loadingComponent}
      isPending={isPending}
      state={state}
      dataOnSuccessCanBeNull={false} // --- by default data on success can not be null
    />
  );
};

export default ServerActionStateDefault;
