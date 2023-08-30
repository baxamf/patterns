export type Region = "America" | "Europe";

type EuropeanCityType = "London" | "Kyiv" | "Copenhagen";

type AmericanCityType = "New-York" | "Chicago" | "Los-Angeles";

export interface ICity {
  timeZone: string;
  city: string;
}

export class City implements ICity {
  public timeZone: string;
  public city: string;

  constructor(region: Region, city: string) {
    this.timeZone = `${region}/${city.replace("-", "_")}`;
    this.city = city;
  }
}

interface ICityBuilder {
  build(): ICity;
}

export class AmericanCityBuilder implements ICityBuilder {
  private static instance: AmericanCityBuilder;

  private region: Region;
  public city: string = "";

  private constructor(region: Region) {
    this.region = region;
  }

  public static getInstance(): AmericanCityBuilder {
    if (!this.instance) {
      this.instance = new AmericanCityBuilder("America");
    }
    return this.instance;
  }

  public setCity(city: AmericanCityType) {
    this.city = city;
  }

  public build(): ICity {
    return new City(this.region, this.city);
  }
}

export class EuropeanCityBuilder implements ICityBuilder {
  private static instance: EuropeanCityBuilder;

  private region: Region;
  public city: string = "";

  private constructor(region: Region) {
    this.region = region;
  }

  public static getInstance(): EuropeanCityBuilder {
    if (!this.instance) {
      this.instance = new EuropeanCityBuilder("Europe");
    }
    return this.instance;
  }

  public setCity(city: EuropeanCityType) {
    this.city = city;
  }

  public build(): ICity {
    return new City(this.region, this.city);
  }
}
