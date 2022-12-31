import { Router } from 'express';
import BookController from '../controllers/books.controller';
import { validateBook, validateUpdate } from '../middlewares/books.middleware';

const router = Router();

const bookController = new BookController();

router.get('/books', bookController.getAll);
router.get('/books/:id', bookController.getById);

router.post('/books', validateBook, bookController.create);

router.put('/books/:id', validateBook, bookController.update);

router.delete('/books/:id', bookController.remove);

router.patch('/books/:id', validateUpdate, bookController.patch);

export default router;