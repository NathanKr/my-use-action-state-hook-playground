import { IServerActionStateGen } from "@/types/types";
import { FC} from "react";

const ServerActionStateGen: FC<IServerActionStateGen<unknown>> = ({
  isPending,
  state,
  successComponent,
  loadingComponent,
  errorComponent,
}) => {
  const {error,data} = state;
  if (isPending) {
    return loadingComponent;
  }

  if (error) {
    return errorComponent;
  }

  if (!data) {
    // --- not ready (i assume here that data must exist i.e. minimally return suceess \ fail)
    return <></>;
  }

  return successComponent; // -- not pending and no error so success
};

export default ServerActionStateGen;
