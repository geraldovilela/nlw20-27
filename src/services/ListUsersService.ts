import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepository"

class ListUsersService {

  async execute(){
    const userRepositorie = getCustomRepository(UsersRepositories);

    const users = await userRepositorie.find();

    return users;
  }
}

export { ListUsersService }