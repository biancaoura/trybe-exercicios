import IUser from '../interfaces/IUser';
import { NextFunction, Request, Response} from 'express';
import { userSchema } from '../utils/userSchema';
import { StatusCodes } from 'http-status-codes';

const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body;

  const { error } = userSchema.validate(user);

  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }

  next();
}

export default userMiddleware;