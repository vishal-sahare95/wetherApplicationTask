import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/config/forecast.service';

@Component({
  selector: 'app-whether-forcasting-view',
  templateUrl: './whether-forcasting-view.component.html',
  styleUrls: ['./whether-forcasting-view.component.scss']
})
export class WhetherForcastingViewComponent implements OnInit {

  constructor(private _service:ForecastService) { }
  public data:any={}
  ngOnInit(): void {

  }

}
