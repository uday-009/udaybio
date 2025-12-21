import type { Context } from "@netlify/edge-functions";

export default async (req: Request, context: Context) => {
  // For Next.js, let the main application handle routing
  return context.next();
};

export const config = {
  path: "/*",
};
