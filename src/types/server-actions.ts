import { ReactElement } from "react";

// Define the type for the state
export interface State<TData> {
  data: TData | null;
  error: Error | null; // Error is part of typescript - lib.es5.d.ts interface Error  name: string; message: string;  stack?: string;
}

export interface IServerActionStateBase<TData> {
  isPending: boolean;
  state: State<TData>;
}

export interface IServerActionStateDefault<TData>
  extends IServerActionStateBase<TData> {
  successComponent: ReactElement;
}

export interface IServerActionStateGen<TData>
  extends IServerActionStateBase<TData> {
  successComponent: ReactElement;
  errorComponent: ReactElement;
  loadingComponent: ReactElement;
  dataOnSuccessCanBeNull : boolean
}
