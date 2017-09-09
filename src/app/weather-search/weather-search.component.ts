import { Component, OnInit, Input } from '@angular/core';

import { WeatherRequestService } from '../weather-request.service';
import {WeatherItem} from "../weather-item/weather-item";



@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html'
})
export class WeatherSearchComponent implements OnInit {

  constructor(private weatherRequestService: WeatherRequestService) { }

  ngOnInit() {
  }

  onSearch(inputValue: HTMLInputElement) {
    if(!inputValue.value) return alert("Please enter a city/zipcode!");
    this.weatherRequestService.getWeather(inputValue.value);
    inputValue.value = "";
  }

}
