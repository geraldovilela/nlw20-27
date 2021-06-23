import {Request, Response, NextFunction} from 'express';

export function ensureIsAdmin(req:Request, res:Response, next:NextFunction){

  const admin=false;

  if(admin) {
    return next();
  }

  return res.status(401).json({
    error: "User is not authorized to perform this action."
  })
  
};