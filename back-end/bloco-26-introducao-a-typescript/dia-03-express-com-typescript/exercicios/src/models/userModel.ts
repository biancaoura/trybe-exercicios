import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
// import connection from './connection';
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

  public async getById(id: number): Promise<IUser> {
    const [rows] = await this.connection.execute<(IUser & RowDataPacket)[]>(
      'SELECT * FROM Users WHERE id=?',
      [id]
    );
    return rows[0];
  }
}