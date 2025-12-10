import { TablesSessionsController } from "@/controllers/tables-sessions-controller";
import { Router } from "express";

const tablesSessionsRouter = Router();

const tableSessionController = new TablesSessionsController();

tablesSessionsRouter.get("/", tableSessionController.index);
tablesSessionsRouter.post("/", tableSessionController.create);
tablesSessionsRouter.patch("/session/:id", tableSessionController.update);

export { tablesSessionsRouter };
