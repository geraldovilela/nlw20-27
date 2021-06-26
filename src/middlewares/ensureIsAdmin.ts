import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepository';

export async function ensureIsAdmin(req: Request, res: Response, next: NextFunction) {
  const userRepositories = getCustomRepository(UsersRepositories);

  const { user_id } = req;

  const {admin} = await userRepositories.findOne(user_id);  

  if (admin) {
    return next();
  }

  return res.status(401).json({
    error: "User is not authorized to perform this action."
  })

};