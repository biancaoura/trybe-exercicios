"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = __importDefault(require("../controllers/books.controller"));
const router = (0, express_1.Router)();
const bookController = new books_controller_1.default();
router.get('/books', bookController.getAll);
router.get('/books/:id', bookController.getById);
router.post('/books', bookController.create);
router.put('/books/:id', bookController.update);
router.delete('/books/:id', bookController.remove);
exports.default = router;
