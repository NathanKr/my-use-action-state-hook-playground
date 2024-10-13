import { IServerActionStateGen } from "@/types/types";
import { FC} from "react";

const ServerActionStateGen: FC<IServerActionStateGen> = ({
  isPending,
  error,
  successComponent,
  loadingComponent,
  errorComponent,
}) => {
  if (isPending) {
    return loadingComponent;
  }

  if (error) {
    return errorComponent;
  }

  return successComponent; // -- not pending and no error so success
};

export default ServerActionStateGen;
