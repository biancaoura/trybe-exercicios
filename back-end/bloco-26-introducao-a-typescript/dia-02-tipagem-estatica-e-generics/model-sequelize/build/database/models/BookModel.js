"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var _1 = __importDefault(require("."));
var Books = /** @class */ (function (_super) {
    __extends(Books, _super);
    function Books() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Books;
}(sequelize_1.Model));
Books.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: (0, sequelize_1.STRING)(30),
        allowNull: false,
    },
    price: {
        type: (0, sequelize_1.DECIMAL)(10, 2),
        allowNull: false,
    },
    author: {
        type: (0, sequelize_1.STRING)(100),
        allowNull: false,
    },
    isbn: {
        type: (0, sequelize_1.STRING)(100),
    },
}, {
    sequelize: _1.default,
    modelName: 'books',
    timestamps: false,
});
exports.default = Books;
