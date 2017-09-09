import { Component, OnInit, Input } from '@angular/core';

import { WeatherRequestService } from '../weather-request.service';
import { ForecastData } from './forecast-data';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input() dayData: ForecastData[] = [];

  constructor(private weatherRequestService: WeatherRequestService) {}

  getSingleDay(timestamp) {
    var date = new Date(timestamp*10000),
      day = date.getDay(),
      days = ['SUN','MON','TUE','WED','THU','FRI','SAT'],
      dayOfWeek = days[date.getDay()];

    return dayOfWeek;
  }

  ngOnInit() {
    var day, imageUrl, temp;

    this.weatherRequestService.updateForecast.subscribe(
    (forecastData: any) => {
      for(let key of forecastData) {
        day = this.getSingleDay(key.dt);
        imageUrl = "https://openweathermap.org/img/w/" + key.weather[0].icon + ".png";
        temp = Math.round(key.main.temp);

        this.dayData.push(new ForecastData(day, temp, imageUrl));
      }
    });
  }

}
