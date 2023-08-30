import { AmericanCityBuilder, EuropeanCityBuilder } from "./CityBuilder";
import { FactoryMethod } from "./FactoryMethod";

const EuroBuilder: any = EuropeanCityBuilder.getInstance();
const AmericanBuilder = AmericanCityBuilder.getInstance();

EuroBuilder.setCity("London");
const london = EuroBuilder.build();
EuroBuilder.setCity("Kyiv");
const kiyv = EuroBuilder.build();
AmericanBuilder.setCity("New-York");
const newYork = AmericanBuilder.build();

const AmericaFactory = FactoryMethod.createFactory("America");
const EuropeanFactory = FactoryMethod.createFactory("Europe");

const americanStyleShowTime = AmericaFactory.createShowTime();
const europeanStyleShowTime = EuropeanFactory.createShowTime();

console.log(americanStyleShowTime.showTime(london));
console.log(europeanStyleShowTime.showTime(london));
console.log(americanStyleShowTime.showTime(kiyv));
console.log(europeanStyleShowTime.showTime(kiyv));
console.log(americanStyleShowTime.showTime(newYork));
console.log(europeanStyleShowTime.showTime(newYork));
