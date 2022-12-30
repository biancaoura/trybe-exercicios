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
    const users = await this.userModel.getById(id);
    return users;
  }
}