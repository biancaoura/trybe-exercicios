"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
var unitValue;
(function (unitValue) {
    unitValue[unitValue["kg"] = 1000] = "kg";
    unitValue[unitValue["hg"] = 100] = "hg";
    unitValue[unitValue["dag"] = 10] = "dag";
    unitValue[unitValue["g"] = 1] = "g";
    unitValue[unitValue["dg"] = 0.1] = "dg";
    unitValue[unitValue["cg"] = 0.01] = "cg";
    unitValue[unitValue["mg"] = 0.001] = "mg";
})(unitValue || (unitValue = {}));
const convert = (value, fromUnit, toUnit) => (value * unitValue[fromUnit]) / unitValue[toUnit];
const exec = () => {
    const value = readline_sync_1.default.questionFloat('Valor a ser convertido: ');
    const fromUnit = readline_sync_1.default.question('Unidade base: ');
    const toUnit = readline_sync_1.default.question('Unidade para conversão: ');
    const converted = convert(value, fromUnit, toUnit);
    console.log(converted);
};
exec();
exports.default = exec;
