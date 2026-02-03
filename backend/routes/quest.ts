import type { RouteMap } from "../src/types"

export const questRouter : RouteMap = {
        "/quest": {
            GET: (req: Request) => new Response(),
            POST: (req: Request) => new Response(),
        },
        "/quest/main":  (req: Request)  =>  new Response(
            
        ),
        "/quest/daily": (req: Request)  =>  new Response(
            
        ),
        "/quest/secondary": (req: Request)  =>  new Response(
            
        ),
        "/quest/tirdparty": (req: Request)  =>  new Response(
            
        ),
        "/quest/:id" : {
            GET: (req: Request) => new Response(),
            PATCH: (req: Request) => new Response(),
            DELETE: (req: Request) => new Response(),
        },
        "/quest/*": (req: Request) => Response.json({message: "Not Found"}, { status : 404})
}