"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryMethod = void 0;
var AbstractFactory_1 = require("./AbstractFactory");
var FactoryMethod = /** @class */ (function () {
    function FactoryMethod() {
    }
    FactoryMethod.createFactory = function (region) {
        switch (region) {
            case "America":
                return new AbstractFactory_1.AmericaTimeFormatFactory();
            case "Europe":
                return new AbstractFactory_1.EuropeTimeFormatFactory();
            default:
                throw new Error("Unknown region ".concat(region));
        }
    };
    return FactoryMethod;
}());
exports.FactoryMethod = FactoryMethod;
