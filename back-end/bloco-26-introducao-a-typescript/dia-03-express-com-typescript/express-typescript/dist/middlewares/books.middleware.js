"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdate = exports.validateBook = void 0;
const statusCodes_1 = __importDefault(require("../statusCodes"));
const properties = ['title', 'price', 'author', 'isbn'];
function validateProperties(book) {
    for (let i = 0; i < properties.length; i += 1) {
        if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
            return [false, properties[i]];
        }
    }
    return [true, null];
}
function validateValues(book) {
    const entries = Object.entries(book);
    for (let i = 0; i < entries.length; i += 1) {
        const [property, value] = entries[i];
        if (!value) {
            return [false, property];
        }
    }
    return [true, null];
}
function validateBook(req, res, next) {
    const book = req.body;
    let [valid, property] = validateProperties(book);
    if (!valid) {
        return res.status(statusCodes_1.default.BAD_REQUEST).send(`The ${property} field is obligatory`);
    }
    [valid, property] = validateValues(book);
    if (!valid) {
        return res.status(statusCodes_1.default.BAD_REQUEST).send(`The ${property} field can't be null or empty`);
    }
    next();
}
exports.validateBook = validateBook;
function differenceBetweenArrays(arr1, arr2) {
    return arr1.filter((el) => !arr2.includes(el));
}
function validateUpdate(req, res, next) {
    const book = req.body;
    const difference = differenceBetweenArrays(Object.keys(book), properties);
    const isBookValid = difference.length === 0;
    if (!isBookValid) {
        return res.status(statusCodes_1.default.BAD_REQUEST).send(`The ${difference} fields don't exist in the Book type`);
    }
    next();
}
exports.validateUpdate = validateUpdate;
