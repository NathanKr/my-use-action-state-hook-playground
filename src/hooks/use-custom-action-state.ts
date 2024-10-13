import { useState, useTransition } from "react";

// Define the type for the state
export interface State<TData> {
  data: TData | null;
  error: Error | null; // Error is part of typescript - lib.es5.d.ts interface Error  name: string; message: string;  stack?: string;
}

// Create the custom hook
export function useCustomActionState<TData>(
  action: () => Promise<TData>,
  initialState: State<TData>
): {state : State<TData>, run : () => void, isPending : boolean} {
  const [state, setState] = useState<State<TData>>(initialState);
  const [isPending, startTransition] = useTransition();

  const run = () => {
    startTransition(async () => {
      try {
        const data = await action();
        setState({ data, error: null });
      } catch (error) {
        setState({ data: null, error: error as Error });
      }
    });
  };

  return {state, run, isPending};
}
