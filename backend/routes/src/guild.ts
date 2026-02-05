import type { RouteMap } from "../../src/utils/types";

export const guildRouter: RouteMap = {
  "/guilds": {
    GET: (req: Request) => new Response(),
    POST: (req: Request) => new Response(),
  },
  "/guilds/:guildId": {
    GET: (req: Request) => new Response(),
    PATCH: (req: Request) => new Response(),
    DELETE: (req: Request) => new Response(),
  },
    "/guilds/:guildId/members": {
    GET: (req: Request) => new Response(),
  },
  "/guilds/:guildId/members/:memberId": {
    GET: (req: Request) => new Response(),
    DELETE: (req: Request) => new Response(),
  },
  "/guilds/:guildId/quests": {
    GET: (req: Request) => new Response(),
    POST: (req: Request) => new Response(),
  },
  "/guilds/:guildId/quests/:questId": {
    GET: (req: Request) => new Response(),
    PATCH: (req: Request) => new Response(),
    DELETE: (req: Request) => new Response(),
  },
  "/guilds/:guildId/activeQuests": {
    GET: (req: Request) => new Response(),
  },
}