import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { count } from 'rxjs';
import { ForecastService } from 'src/app/config/forecast.service';
import { search } from 'src/app/config/search-interface';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	public form: FormGroup;
	public searchData: search[] = [];
	public weatherData: any;
	public currentIndex: number =0;
	public filterEdweatherData: any []= [];
	constructor(
		private fb: FormBuilder,
		private _service: ForecastService
	) {
		this.form = this.fb.group({
			name: ['London', [Validators.required]],
			days:['', [Validators.required]],
			aqi:['no']
		})
		this._service.getSearch('london').subscribe((suc: search[]) => {
			this.searchData = suc
		})	
	}

	ngOnInit(): void {

	}

	search(formValue: search,day:number=0,qi:string='no') {
		this._service.getSearch(formValue.name).subscribe((suc: search[]) => {			
			this.searchData = suc		
		})
		this._service.getForecast(formValue.name, (this.form.get('days')?.value>0 ? this.form.get('days')?.value:day), (this.form.get('aqi')?.value !='no' ? this.form.get('aqi')?.value:qi)).subscribe((suc: any) => {	
			this.weatherData = suc;
			this.filterEdweatherData = this.weatherData.forecast.forecastday;
		})
	}

	next (){
			this.currentIndex ++;
	}
	pre(){
		this.currentIndex --;
	}
	 
}
