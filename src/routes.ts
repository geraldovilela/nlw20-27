import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController {";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ensureIsAdmin } from "./middlewares/ensureIsAdmin";
import { ensureIsAuthenticated } from "./middlewares/ensureIsAuthenticated";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiverComplimentsContrller = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersContrller = new ListUsersController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureIsAuthenticated, ensureIsAdmin, createTagController.handle);
router.post("/sessions", authenticateUserController.handle);
router.post("/compliments", ensureIsAuthenticated, createComplimentController.handle);

router.get("/users", ensureIsAuthenticated, listUsersContrller.handle)
router.get("/tags", ensureIsAuthenticated, listTagsController.handle)
router.get("/users/compliments/send", ensureIsAuthenticated, listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", ensureIsAuthenticated, listUserReceiverComplimentsContrller.handle)
export { router };