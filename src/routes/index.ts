import { Router } from "express";

import { productsRoutes } from "./products-route";
import { tablesRoutes } from "./tables-route";
import { tablesSessionsRouter } from "./tables-sessions-routes";

const routes = Router();

routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);
routes.use("/tables-session", tablesSessionsRouter);

export { routes };
