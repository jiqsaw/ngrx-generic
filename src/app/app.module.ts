import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule, routes } from './app-routing';
import { reducers, metaReducers, CustomRouterStateSerializer } from './root/root.reducer';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PlanetsModule } from './planets/planets.module';
import { StarshipsModule } from './starships/starships.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		FormsModule,
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		RouterModule.forRoot(routes, { enableTracing: false }),
		StoreModule.forRoot(
			reducers,
			{ metaReducers }
		),
		StoreRouterConnectingModule,
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		EffectsModule.forRoot([]),

		AppRoutingModule,
		PlanetsModule,
		StarshipsModule
	],
	providers: [
		{
			provide: RouterStateSerializer,
			useClass: CustomRouterStateSerializer
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
