"use client";

import { fetchPostsLength } from "@/actions/actions";
import { useCustomActionState } from "@/hooks/use-custom-action-state";

export default function GetPostsLen2() {
  const [state, run, isPending] = useCustomActionState<number>(
    async () => {
      const length = await fetchPostsLength();
      return length;
    },
    { data: null, error: null }
  );

  return (
    <div>
      <button onClick={run}>Get posts length</button>
      {isPending && <p>Loading...</p>}
      {state.error && <p>Error: {state.error.message}</p>}
      {state.data !== null && !isPending && !state.error && (
        <p>Posts length: {state.data}</p>
      )}
    </div>
  );
}
