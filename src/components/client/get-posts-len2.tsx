"use client";

import { fetchPostsLength } from "@/actions/actions";
import { useCustomActionState } from "@/hooks/use-custom-action-state";
import ServerActionState from "./server-action-state"; // Adjust path as necessary

export default function GetPostsLen2() {
  const { state, run, isPending } = useCustomActionState<number>(
    async () => {
      const length = await fetchPostsLength();
      return length;
    },
    { data: null, error: null }
  );

  return (
    <div>
      <button onClick={run}>Get posts length</button>
      <ServerActionState
        isPending={isPending}
        error={state.error}
        loadingComponent={<p>Loading...</p>}
        errorComponent={<p>Error: {state.error?.message}</p>}
        successComponent={
          <div>
            <p>Operation successful!</p>
            {state.data !== null && <p>Posts length: {state.data}</p>}
          </div>
        }
      />
    </div>
  );
}
