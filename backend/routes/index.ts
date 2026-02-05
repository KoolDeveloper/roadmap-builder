import type { RouteMap } from "../src/utils/types.ts";
import { questRouter } from "./quest";
import { rewardsRouter } from "./rewards";
import { usersRouter } from "./users";

export const routes : RouteMap = {
  ...questRouter,
  ...rewardsRouter,
  ...usersRouter,
};