import { Component, OnInit } from '@angular/core';
import { WeatherItemComponent } from '../weather-item/weather-item.component';

import {WeatherItem} from "../weather-item/weather-item";
import { WeatherRequestService } from '../weather-request.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html'
})
export class WeatherListComponent implements OnInit {
  weatherItems: WeatherItem[] = [];

  constructor(private weatherRequestService: WeatherRequestService) {
    this.weatherItems = this.weatherRequestService.weatherItems;
    this.weatherRequestService.statusUpdated.subscribe(
    (ingredients: WeatherItem[]) => {
      this.weatherItems = ingredients;
    });
  }

  ngOnInit():any {}
}
