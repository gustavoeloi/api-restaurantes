import { Router } from "express";

import { productsRoutes } from "./products-route";
import { tablesRoutes } from "./tables-route";
import { tablesSessionsRouter } from "./tables-sessions-routes";
import { ordersRoute } from "./orders-route";

const routes = Router();

routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);
routes.use("/tables-session", tablesSessionsRouter);
routes.use("/orders", ordersRoute);

export { routes };
