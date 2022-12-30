import { Router } from 'express';
import UserController from '../controllers/userController';

const userController = new UserController();
const router = Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getById);

export default router;