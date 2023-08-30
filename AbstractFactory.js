"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EuropeTimeFormatFactory = exports.AmericaTimeFormatFactory = void 0;
var AmericaTimeFormatFactory = /** @class */ (function () {
    function AmericaTimeFormatFactory() {
    }
    AmericaTimeFormatFactory.prototype.createShowTime = function () {
        return new ShowAmericanStyleTime();
    };
    return AmericaTimeFormatFactory;
}());
exports.AmericaTimeFormatFactory = AmericaTimeFormatFactory;
var EuropeTimeFormatFactory = /** @class */ (function () {
    function EuropeTimeFormatFactory() {
    }
    EuropeTimeFormatFactory.prototype.createShowTime = function () {
        return new ShowEuropeanStyleTime();
    };
    return EuropeTimeFormatFactory;
}());
exports.EuropeTimeFormatFactory = EuropeTimeFormatFactory;
var ShowAmericanStyleTime = /** @class */ (function () {
    function ShowAmericanStyleTime() {
    }
    ShowAmericanStyleTime.prototype.showTime = function (cityObj) {
        var timeZone = cityObj.timeZone, city = cityObj.city;
        var time = new Date().toLocaleString("en-US", {
            timeZone: timeZone,
        });
        console.log("There is AMERICAN style of date/time presentation");
        console.log("There is a date/time in city ".concat(city, ": ").concat(time));
        return "--------------------------------------------------------";
    };
    return ShowAmericanStyleTime;
}());
var ShowEuropeanStyleTime = /** @class */ (function () {
    function ShowEuropeanStyleTime() {
    }
    ShowEuropeanStyleTime.prototype.showTime = function (cityObj) {
        var timeZone = cityObj.timeZone, city = cityObj.city;
        var time = new Date().toLocaleString("en-GB", {
            timeZone: timeZone,
        });
        console.log("There is EUROPEAN style of date/time presentation");
        console.log("There is a date/time in city ".concat(city, ": ").concat(time));
        return "--------------------------------------------------------";
    };
    return ShowEuropeanStyleTime;
}());
