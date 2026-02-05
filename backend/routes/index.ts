import type { RouteMap } from "../src/utils/types.ts";
import { questRouter } from "./src/quest.ts";
import { rewardsRouter } from "./src/rewards.ts";
import { usersRouter } from "./src/users.ts";

export const routes : RouteMap = {
  ...questRouter,
  ...rewardsRouter,
  ...usersRouter,
};