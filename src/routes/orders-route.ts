import { OrderController } from "@/controllers/orders-controller";
import { Router } from "express";

const ordersRoute = Router();
const ordersController = new OrderController();

ordersRoute.get("/table-session/:id", ordersController.index);
ordersRoute.get("/table-session/:id/show", ordersController.show);
ordersRoute.post("/", ordersController.create);

export { ordersRoute };
