import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IUser from '../interfaces/IUser';
import UserService from '../services/userService';

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

    const newUser = await this.userService.create(user);

    res.status(StatusCodes.CREATED).json(newUser);
  }

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = req.body as IUser;
    
    await this.userService.update(id, user);

    res.status(StatusCodes.OK).end();
  }

  public delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    await this.userService.delete(id);

    res.status(StatusCodes.NO_CONTENT).end();
  }
}