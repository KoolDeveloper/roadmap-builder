import type { RouteMap } from "../../src/utils/types";

export const eventRouter : RouteMap = {
        "/events": {
            GET: (req: Request) => new Response(),
            POST: (req: Request) => new Response(),
        },
        "/events/id/:id" : {
            GET: (req: Request) => new Response(),
            PATCH: (req: Request) => new Response(),
            DELETE: (req: Request) => new Response(),
        },
        "/events/*": (req: Request) => Response.json({message: "Event not found"}, { status : 404})
}