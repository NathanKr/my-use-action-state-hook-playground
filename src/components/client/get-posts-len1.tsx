"use client";

import { fetchPostsLength } from "@/actions/actions";
import { useState } from "react";

export default function GetPostsLen1() {
  const [len, setLen] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <button
        onClick={async () => {
          setIsLoading(true);
          setError(null);
          try {
            const length = await fetchPostsLength();
            setLen(length);
          } catch (err) {
            if (err instanceof Error) {
              setError(err.message);
            } else {
              setError("An unknown error occurred");
            }
          } finally {
            setIsLoading(false);
          }
        }}
      >
        Get posts length
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {len !== null && !isLoading && !error && <p>Posts length: {len}</p>}
    </div>
  );
}
