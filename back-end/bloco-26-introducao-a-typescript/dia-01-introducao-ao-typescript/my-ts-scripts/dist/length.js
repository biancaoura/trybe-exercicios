"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
var unitValue;
(function (unitValue) {
    unitValue[unitValue["km"] = 1000] = "km";
    unitValue[unitValue["hm"] = 100] = "hm";
    unitValue[unitValue["dam"] = 10] = "dam";
    unitValue[unitValue["m"] = 1] = "m";
    unitValue[unitValue["dm"] = 0.1] = "dm";
    unitValue[unitValue["cm"] = 0.01] = "cm";
    unitValue[unitValue["mm"] = 0.001] = "mm";
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
