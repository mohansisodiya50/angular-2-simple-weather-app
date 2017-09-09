import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {WeatherItem} from "./weather-item/weather-item";

@Injectable()
export class WeatherRequestService {
  statusUpdated = new EventEmitter<WeatherItem[]>();
  updateForecast = new EventEmitter<any>();
  private apiUrl: string;
   data: any = {};
   weatherData: WeatherItem = new WeatherItem(1000, "Home City", "On page load....", 20, "https://openweathermap.org/img/w/04d.png");
   weatherItems: WeatherItem[] = [];

  constructor(private http: Http) { }

  getWeather(inputValue: string) {
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + inputValue + '&units=imperial&APPID=2690da476be1adf9a96487df1313017a';
    this.getData().subscribe(data => {
        this.weatherData = new WeatherItem(data.id, data.name, data.weather[0].description, Math.round(data.main.temp), "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
        this.weatherItems.push(this.weatherData);
        this.statusUpdated.emit(this.weatherItems);
      });
  }

  getWeatherForecast(cityId: number) {
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&cnt=6&units=imperial&APPID=2690da476be1adf9a96487df1313017a';
    this.getData().subscribe(data => {
        this.data = data.list;
        this.updateForecast.emit(this.data);
      });
    }

  getData() {
    return this.http.get(this.apiUrl).map((res: Response) => res.json())
  }

}
