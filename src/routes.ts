import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureIsAdmin } from "./middlewares/ensureIsAdmin";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureIsAdmin, createTagController.handle)

export { router };