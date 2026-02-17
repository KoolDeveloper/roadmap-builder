import type { RouteMap } from "../../src/utils/types";

export const usersRouter: RouteMap = {
  "/users": {
    GET: (req: Request) => new Response(),
    POST: (req: Request) => new Response(), 
  },

  "/users/id/:id": {
    GET: (req: Request) => new Response(),
    PATCH: (req: Request) => new Response(),
    DELETE: (req: Request) => new Response(),
  },

  "/users/id/:id/completed":(req: Request) => new Response(),

  "/auth/login": (req: Request) => new Response(),
  "/auth/logout": (req: Request) => new Response(),

  "/users/*": (req: Request) =>
    Response.json({ message: "User not found" }, { status: 404 }),
};