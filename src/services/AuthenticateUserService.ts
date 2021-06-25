import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepository";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticanteUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      email
    })

    if (!user) {
      throw new Error("Email or Password doesnt match")
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or Password doesnt match")
    }

    const jwtToken = sign({ email: user.email, role: user.admin }, "4e2927ce2b7b7b4ce1868d13bc514eb5", {
      subject: user.id,
      expiresIn: "4h"
    })

    return jwtToken;
  }
}

export { AuthenticanteUserService };