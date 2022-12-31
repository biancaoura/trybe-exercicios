import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';
import Book from '../interfaces/book.interface';

const properties = ['title', 'price', 'author', 'isbn'];

function validateProperties(book: Book): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

function validateValues(book: Book): [boolean, string | null] {
  const entries = Object.entries(book);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (!value) {
      return [false, property];
    }
  }
  return [true, null];
}

function validateBook(req: Request, res: Response, next: NextFunction) {
  const book: Book = req.body;

  let [valid, property] = validateProperties(book);

  if (!valid) {
    return res.status(statusCodes.BAD_REQUEST).send(
      `The ${property} field is obligatory`
    );
  }

  [valid, property] = validateValues(book);

  if (!valid) {
    return res.status(statusCodes.BAD_REQUEST).send(
      `The ${property} field can't be null or empty`
    );
  }

  next();
}

function differenceBetweenArrays(arr1: unknown[], arr2: unknown[]) {
  return arr1.filter((el) => !arr2.includes(el));
}

function validateUpdate(req: Request, res: Response, next: NextFunction) {
  const book: Partial<Book> = req.body;
  const difference = differenceBetweenArrays(Object.keys(book), properties);
  const isBookValid = difference.length === 0;

  if (!isBookValid) {
    return res.status(statusCodes.BAD_REQUEST).send(
      `The ${difference} fields don't exist in the Book type`
    )
  }

  next();
}

export {
  validateBook,
  validateUpdate
}