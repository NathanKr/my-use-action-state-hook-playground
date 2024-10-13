import { FC, ReactElement } from "react";

export interface IServerActionState {
  isPending: boolean;
  error: Error | null;
  successComponent: ReactElement;
  errorComponent: ReactElement;
  loadingComponent: ReactElement;
}

// Declare UiFetchData as a generic component
const ServerActionState: FC<IServerActionState> = ({
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

export default ServerActionState;
