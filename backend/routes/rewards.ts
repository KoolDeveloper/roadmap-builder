import type { RouteMap } from "../src/utils/types"

export const rewardsRouter : RouteMap = {
        "/rewards": {
            GET: (req: Request) => new Response(),
            POST: (req: Request) => new Response(),
        },
        "/rewards/id/:id" : {
            GET: (req: Request) => new Response(),
            PATCH: (req: Request) => new Response(),
            DELETE: (req: Request) => new Response(),
        },
        "/rewards/*": (req: Request) => Response.json({message: "Reward not found"}, { status : 404})
}