import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PerformanceComponent} from "./performance/performance.component";
import {Ng2SelectizeModule} from '../../../src/ng2-selectize/ng2-selectize.module';

@NgModule({
	declarations: [AppComponent, HomeComponent, PerformanceComponent],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot([
			{path: 'performance', component: PerformanceComponent},
			{path: '', component: HomeComponent}
		]),
		Ng2SelectizeModule // Import the ng2-selectize module.
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
