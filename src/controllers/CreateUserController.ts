import { Request, Response } from "express";
import { hash } from "bcryptjs";
import "express-async-errors"
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {

  async handle(request: Request, response: Response) {
    const { name, email, admin, password } = request.body;

    const createUserService = new CreateUserService();

    const passwordHash = await hash(password, 8);

    const user = await createUserService.execute({ name, email, admin, password:passwordHash  })
    delete user.password;
    return response.json(user);
  }
}
export { CreateUserController };