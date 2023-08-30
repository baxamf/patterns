import {
  AbstractFactory,
  AmericaTimeFormatFactory,
  EuropeTimeFormatFactory,
} from "./AbstractFactory";
import { Region } from "./CityBuilder";

export class FactoryMethod {
  public static createFactory(region: Region): AbstractFactory {
    switch (region) {
      case "America":
        return new AmericaTimeFormatFactory();
      case "Europe":
        return new EuropeTimeFormatFactory();
      default:
        throw new Error(`Unknown region ${region}`);
    }
  }
}
