import { routes } from "./routes/index";

const server = Bun.serve({
    port:3000,
    idleTimeout: 100,
    routes:{
        "/health" : new Response("Ok" , { status: 200 }),
        ...routes
    },
    fetch(req){
        return Response.json({message: "Not Found"}, { status : 404})
    }
})

console.log(`Puerto abierto en ${server.url}`);
