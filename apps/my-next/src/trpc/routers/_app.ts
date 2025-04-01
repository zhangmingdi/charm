import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { categoriesRouter } from "@/modules/catelgories/server/procedures";
import { studioRouter } from "@/modules/studio/server/procedures";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
