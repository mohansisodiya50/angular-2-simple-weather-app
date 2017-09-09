export class WeatherItem {
    constructor(
      public cityId: number,
      public cityName: string,
      public description: string,
      public temprature: number,
      public imageUrl: string) {}
}
