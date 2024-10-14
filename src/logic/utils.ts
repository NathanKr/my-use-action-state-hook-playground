export function pauseMs(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isDevelopment(): boolean {
  return process.env.NEXT_PUBLIC_NODE_ENV === "development";
}
