import connection from '../models/connection';
import BookModel from '../models/book.model';
import Book from '../interfaces/book.interface';
import { BadRequestError, NotFoundError } from 'restify-errors';

const properties = ['title', 'price', 'author', 'isbn'];

export default class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  // validações
  static validateProperties(book: Book): [boolean, string | null] {
    for (let i = 0; i < properties.length; i += 1) {
      if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
        return [false, properties[i]];
      }
    }
    return [true, null];
  }

  static validateValues(book: Book): [boolean, string | null] {
    const entries = Object.entries(book);
    for (let i = 0; i < entries.length; i += 1) {
      const [property, value] = entries[i];
      if (!value) {
        return [false, property];
      }
    }
    return [true, null];
  }

  static validateBook(book: Book): void | string {
    let [valid, property] = BookService.validateProperties(book);

    if (!valid) {
      return `The ${property} field is obligatory`;
    }

    [valid, property] = BookService.validateValues(book);

    if (!valid) {
      return `The ${property} field can't be null or empty`;
    }
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async getById(id: number): Promise<Book> {
    const book = await this.model.getById(id);
    return book;
  }

  public create(book: Book): Promise<Book> {
    const isBookValid = BookService.validateBook(book);

    if (typeof isBookValid === 'string') {
      throw new BadRequestError(isBookValid);
    }

    return this.model.create(book);
  }

  public async update(id: number, book: Book): Promise<void> {
    const isBookValid = BookService.validateBook(book);

    if (typeof isBookValid === 'string') {
      throw new BadRequestError(isBookValid);
    }

    const bookFound = await this.model.getById(id);

    if (!bookFound) {
      throw new NotFoundError('Book not found');
    }

    return this.model.update(id, book);
  }

  public async remove(id: number): Promise<void> {
    const bookFound = await this.model.getById(id);

    if (!bookFound) {
      throw new NotFoundError('Book not found');
    }

    return this.model.remove(id);
  }
}