import { useState, useTransition } from "react";

// Define the type for the state
export interface State<TData> {
  data: TData | null;
  error: Error | null;
}

// Create the custom hook
export function useCustomActionState<TData>(
  action: () => Promise<TData>,
  initialState: State<TData>
): [State<TData>, () => void, boolean] {
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

  return [state, run, isPending];
}
