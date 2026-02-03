import {questRouter} from "./routes/quest"

const server = Bun.serve({
    port:3000,
    routes:{
        "health" : new Response("Ok" , { status: 200 }),
        ...questRouter
    },
    fetch(req){
        return new Response("Not Found", { status: 404 })
    }
})

console.log(`Puerto abierto en ${server.url}`);