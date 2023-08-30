"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EuropeanCityBuilder = exports.AmericanCityBuilder = exports.City = void 0;
var City = /** @class */ (function () {
    function City(region, city) {
        this.timeZone = "".concat(region, "/").concat(city.replace("-", "_"));
        this.city = city;
    }
    return City;
}());
exports.City = City;
var AmericanCityBuilder = /** @class */ (function () {
    function AmericanCityBuilder(region) {
        this.city = "";
        this.region = region;
    }
    AmericanCityBuilder.getInstance = function () {
        if (!this.instance) {
            this.instance = new AmericanCityBuilder("America");
        }
        return this.instance;
    };
    AmericanCityBuilder.prototype.setCity = function (city) {
        this.city = city;
    };
    AmericanCityBuilder.prototype.build = function () {
        return new City(this.region, this.city);
    };
    return AmericanCityBuilder;
}());
exports.AmericanCityBuilder = AmericanCityBuilder;
var EuropeanCityBuilder = /** @class */ (function () {
    function EuropeanCityBuilder(region) {
        this.city = "";
        this.region = region;
    }
    EuropeanCityBuilder.getInstance = function () {
        if (!this.instance) {
            this.instance = new EuropeanCityBuilder("Europe");
        }
        return this.instance;
    };
    EuropeanCityBuilder.prototype.setCity = function (city) {
        this.city = city;
    };
    EuropeanCityBuilder.prototype.build = function () {
        return new City(this.region, this.city);
    };
    return EuropeanCityBuilder;
}());
exports.EuropeanCityBuilder = EuropeanCityBuilder;
