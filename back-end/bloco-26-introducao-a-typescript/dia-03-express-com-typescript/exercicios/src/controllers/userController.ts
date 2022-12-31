import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import IUser from '../interfaces/IUser';
import UserService from '../services/userService';
import IToken from '../interfaces/IToken';
import { secret, config } from '../middlewares/jwtConfig';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();

    res.status(StatusCodes.OK).json(users);
  }

  public getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = await this.userService.getById(id);

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
    }

    res.status(StatusCodes.OK).json(user);
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userExists = await this.userService.getByEmail(user.email);

    if (userExists) {
      return res.status(StatusCodes.CONFLICT).json({ message: 'User already exists'});
    }

    const payload = await this.userService.create(user);
    const token = jwt.sign({ payload }, secret, config);

    res.status(StatusCodes.CREATED).json({ token, ...payload });
  }

  public update = async (req: Request, res: Response) => {
    const { authorization: token } = req.headers;
    const id = Number(req.params.id);
    const user = req.body as IUser;

    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Token not found'});
    }

    const { payload } = jwt.verify(token, secret) as IToken;
    
    if (payload.id !== id) {
      return res.status(StatusCodes.FORBIDDEN).json({ error: 'You are not allowed to take this action'});
    }

    await this.userService.update(id, user);

    res.status(StatusCodes.OK).end();
  }

  public delete = async (req: Request, res: Response) => {
    const { authorization: token } = req.headers;
    const id = Number(req.params.id);

    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Token not found'});
    }

    const { payload } = jwt.verify(token, secret) as IToken;
    
    if (payload.id !== id) {
      return res.status(StatusCodes.FORBIDDEN).json({ error: 'You are not allowed to take this action'});
    }

    await this.userService.delete(id);

    res.status(StatusCodes.NO_CONTENT).end();
  }
}