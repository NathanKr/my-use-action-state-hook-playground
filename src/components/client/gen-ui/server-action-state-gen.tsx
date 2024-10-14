import { IServerActionStateGen } from "@/types/types";
import { FC} from "react";

const ServerActionStateGen: FC<IServerActionStateGen<unknown>> = ({
  isPending,
  state,
  successComponent,
  loadingComponent,
  errorComponent,
  dataOnSuccessCanBeNull
}) => {
  const {error,data} = state;
  if (isPending) {
    return loadingComponent;
  }

  if (error) {
    return errorComponent;
  }

  if (!dataOnSuccessCanBeNull && !data) {
    // --- not ready , i assume here that data must exist
    return <></>;
  }

  return successComponent; // -- not pending and no error so success
};

export default ServerActionStateGen;
