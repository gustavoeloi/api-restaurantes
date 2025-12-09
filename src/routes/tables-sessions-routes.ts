import { TablesSessionsController } from "@/controllers/tables-sessions-controller";
import { Router } from "express";

const tablesSessionsRouter = Router();

const tableSessionController = new TablesSessionsController();

tablesSessionsRouter.post("/", tableSessionController.create);
tablesSessionsRouter.get("/", tableSessionController.index);

export { tablesSessionsRouter };
