import type { RouteMap } from "../src/utils/types.ts";
import { questRouter } from "./src/quest.ts";
import { rewardsRouter } from "./src/rewards.ts";
import { usersRouter } from "./src/users.ts";
import { eventRouter } from "./src/events.ts";
import { guildRouter } from "./src/guild.ts";

export const routes : RouteMap = {
  ...questRouter,
  ...rewardsRouter,
  ...usersRouter,
  ...guildRouter,
  ...eventRouter,
};