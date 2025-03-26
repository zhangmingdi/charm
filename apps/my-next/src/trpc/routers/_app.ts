import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { categoriesRouter } from "@/modules/catelgories/server/procedures";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
