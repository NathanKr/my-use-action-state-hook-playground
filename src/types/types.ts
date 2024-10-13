import { ReactElement } from "react";

export interface IServerActionStateBase {
  isPending: boolean;
  error: Error | null;
}

export interface IServerActionStateDefault extends IServerActionStateBase {
  successComponent: ReactElement;
}

export interface IServerActionStateGen extends IServerActionStateBase {
  successComponent: ReactElement;
  errorComponent: ReactElement;
  loadingComponent: ReactElement;
}
