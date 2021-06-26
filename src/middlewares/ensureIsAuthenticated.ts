import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureIsAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction) {
  const authToken = req.headers.authorization
  if (!authToken) {
    return res.status(401).end();
  }
  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, "4e2927ce2b7b7b4ce1868d13bc514eb5") as IPayload
    req.user_id = sub;
  } catch (error) {
    return res.status(401).end();
  }


  return next();
}