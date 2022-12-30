import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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

  public async create(user: IUser): Promise<IUser> {
    const { name, email, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );
    const [{ insertId }] = result;
    return { id: insertId, ...user };
  }

  public async update(id: number, user: IUser) {
    const { name, email, password } = user;
    await this.connection.execute(
      'UPDATE Users SET name=?, email=?, password=? WHERE id=?',
      [name, email, password, id]
    );
  }

  public async delete(id: number) {
    await this.connection.execute(
      'DELETE FROM Users WHERE id=?',
      [id]
    );
  }
}