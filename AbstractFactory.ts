import { ICity } from "./CityBuilder";

export interface AbstractFactory {
  createShowTime(): ShowTime;
}

interface ShowTime {
  showTime(cityObj: ICity): string;
}

export class AmericaTimeFormatFactory implements AbstractFactory {
  createShowTime(): ShowTime {
    return new ShowAmericanStyleTime();
  }
}

export class EuropeTimeFormatFactory implements AbstractFactory {
  createShowTime(): ShowTime {
    return new ShowEuropeanStyleTime();
  }
}

class ShowAmericanStyleTime implements ShowTime {
  showTime(cityObj: ICity): string {
    const { timeZone, city } = cityObj;
    const time = new Date().toLocaleString("en-US", {
      timeZone,
    });
    console.log("There is AMERICAN style of date/time presentation");
    console.log(`There is a date/time in city ${city}: ${time}`);
    return "--------------------------------------------------------";
  }
}

class ShowEuropeanStyleTime implements ShowTime {
  showTime(cityObj: ICity): string {
    const { timeZone, city } = cityObj;
    const time = new Date().toLocaleString("en-GB", {
      timeZone,
    });
    console.log("There is EUROPEAN style of date/time presentation");
    console.log(`There is a date/time in city ${city}: ${time}`);
    return "--------------------------------------------------------";
  }
}
