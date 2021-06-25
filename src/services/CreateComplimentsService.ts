import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepository";
import { UsersRepositories } from "../repositories/UsersRepository";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
    const complimentsRepositorie = getCustomRepository(ComplimentsRepositories);
    const userRepositories = getCustomRepository(UsersRepositories);
    if (user_receiver === user_sender) {
      throw new Error("You cant compliment yourself!!")
    }
    
    const userReceiverExists = await userRepositories.findOne(user_receiver)
    if (!userReceiverExists) {
      throw new Error("Invalid id for user receiver.")
    }

    const compliment = complimentsRepositorie.create({
      message,
      user_receiver,
      user_sender,
      tag_id
    })

    await complimentsRepositorie.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };