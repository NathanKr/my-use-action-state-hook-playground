import { State } from "@/types/types";
import { useState, useTransition } from "react";

// Create the custom hook
export function useCustomActionState<TData>(
  action: () => Promise<TData>,
  initialState: State<TData>
): { state: State<TData>; run: () => void; isPending: boolean } {
  const [state, setState] = useState<State<TData>>(initialState);
  const [isPending, startTransition] = useTransition();

  const run = () => {
    startTransition(async () => {
      try {
        const data = await action();
        setState({ data, error: null });
      } catch (error) {
        setState({
          data: null,
          error:
            error instanceof Error
              ? error
              : new Error("An unknown error occurred"),
        });
      }
    });
  };

  return { state, run, isPending };
}
