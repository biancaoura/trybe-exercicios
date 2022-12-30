import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import IUser from '../interfaces/IUser';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IUser[]> {
    const [rows] = await this.connection.execute<(IUser & RowDataPacket)[]>(
      'SELECT * FROM Users'
    );
    return rows;
  }
}