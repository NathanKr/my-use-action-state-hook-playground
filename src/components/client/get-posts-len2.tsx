"use client";

import { fetchPostsLength } from "@/actions/actions";
import { useCustomActionState } from "@/hooks/use-custom-action-state";
import ServerActionStateDefault from "./gen-ui/server-action-state-default";
import { Alert } from "@mui/material";

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
      <ServerActionStateDefault
        isPending={isPending}
        error={state.error}
        successComponent={
          <div>
            <Alert severity="success">Operation successful!</Alert>
            {state.data !== null && <p>Posts length: {state.data}</p>}
          </div>
        }
      />
    </div>
  );
}
