import { Router } from 'express';
import BookController from '../controllers/books.controller';

const router = Router();

const bookController = new BookController();

router.get('/books', bookController.getAll);
router.get('/books/:id', bookController.getById);

router.post('/books', bookController.create);

router.put('/books/:id', bookController.update);

router.delete('/books/:id', bookController.remove);

export default router;