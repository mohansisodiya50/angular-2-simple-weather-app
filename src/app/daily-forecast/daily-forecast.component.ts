import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ForecastData } from '../forecast/forecast-data';


@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.css']
})
export class DailyForecastComponent implements OnInit {
  @Input() dayData: ForecastData[] = [];
  cityName: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.cityName = this.route.snapshot.params['cityName'];
  }

}
