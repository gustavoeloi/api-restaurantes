import { Router } from "express";

import { productsRoutes } from "./products-route";

const routes = Router();

routes.use("/products", productsRoutes);

export { routes };
