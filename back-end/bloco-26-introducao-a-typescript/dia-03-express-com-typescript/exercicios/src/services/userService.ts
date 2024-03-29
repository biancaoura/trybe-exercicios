import UserModel from '../models/userModel';
import connection from '../models/connection';
import IUser from '../interfaces/IUser';

export default class UserService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public async getAll(): Promise<IUser[]> {
    const users = await this.userModel.getAll();
    return users;
  }

  public async getById(id: number): Promise<IUser> {
    const user = await this.userModel.getById(id);
    return user;
  }

  public async getByEmail(email: string): Promise<IUser> {
    const user = await this.userModel.getByEmail(email);
    return user;
  }

  public async create(user: IUser): Promise<IUser> {
    return this.userModel.create(user);
  }

  public async update(id: number, user: IUser): Promise<void> {
    await this.userModel.update(id, user);
  }

  public async delete(id: number): Promise<void> {
    await this.userModel.delete(id);
  }
}