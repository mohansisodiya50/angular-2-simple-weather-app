import { Component, OnInit, Input } from '@angular/core';
import {WeatherItem} from "./weather-item";

import { WeatherRequestService } from '../weather-request.service';


@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css'],
  inputs: ['weatherItem']
})
export class WeatherItemComponent implements OnInit {
@Input() weatherItem: WeatherItem;

constructor(private weatherRequestService: WeatherRequestService) {}

getWeatherForecast() {
  this.weatherRequestService.getWeatherForecast(this.weatherItem.cityId);
}
  ngOnInit() {
  }

}
