import { UsersRepositories } from "../repositories/UsersRepository"

interface IUserRequest {
  name:string;
  email:string;
  admin?:boolean;
}

class CreateUserService {

  async Execute({email, name, admin}:IUserRequest) {
    const usersRepository = new UsersRepositories();

    if(!email) {
      throw new Error("Email is invalid.")
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if(userAlreadyExists){
      throw new Error("User already exists.")
    }

    const user = usersRepository.create({
      name,
      email,
      admin
    });
  
    await usersRepository.save(user);
  }
}

export { CreateUserService }