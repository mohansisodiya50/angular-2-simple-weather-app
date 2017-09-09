import { Component, Input } from '@angular/core';

import { WeatherRequestService } from './weather-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any;

  constructor(private weatherRequestService: WeatherRequestService) {
    this.weatherRequestService.getWeather('Boston');
  }

}
