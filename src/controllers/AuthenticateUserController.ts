import { Request, response, Response } from "express";
import { AuthenticanteUserService } from "../services/AuthenticateUserService";


class AuthenticateUserController {

  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authenticanteUserService = new AuthenticanteUserService();
    
    const jwtToken = await authenticanteUserService.execute({
      email, password
    });

    return res.json(jwtToken);
  }

}

export { AuthenticateUserController };