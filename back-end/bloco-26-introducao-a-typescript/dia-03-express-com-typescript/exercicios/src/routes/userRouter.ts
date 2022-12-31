import { Router } from 'express';
import UserController from '../controllers/userController';
import userMiddleware from '../middlewares/userMiddleware';

const userController = new UserController();
const router = Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getById);

router.post('/', userMiddleware, userController.create);

router.put('/:id', userMiddleware, userController.update);

router.delete('/:id', userController.delete);

export default router;