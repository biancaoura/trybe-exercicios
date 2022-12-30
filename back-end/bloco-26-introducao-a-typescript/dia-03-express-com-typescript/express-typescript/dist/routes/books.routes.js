"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = __importDefault(require("../controllers/books.controller"));
const books_middleware_1 = require("../middlewares/books.middleware");
const router = (0, express_1.Router)();
const bookController = new books_controller_1.default();
router.get('/books', bookController.getAll);
router.get('/books/:id', bookController.getById);
router.post('/books', books_middleware_1.validateBook, bookController.create);
router.put('/books/:id', books_middleware_1.validateBook, bookController.update);
router.delete('/books/:id', bookController.remove);
router.patch('/books/:id', books_middleware_1.validateUpdate, bookController.patch);
exports.default = router;
