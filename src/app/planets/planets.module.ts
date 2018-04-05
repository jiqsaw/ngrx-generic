import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { reducer } from '../core/core.reducers';
import { PlanetsComponent } from './planets.component';
import { PlanetsService } from './planets.service';
import { MODULES } from '../app.config';
import { CoreEffects } from '../core/core.effects';
import { PlanetDetailComponent } from './planet-detail.component';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule,
		StoreModule.forFeature(MODULES[MODULES.PLANET], reducer(MODULES.PLANET)),
		EffectsModule.forFeature([
			CoreEffects
		])
	],
	declarations: [
		PlanetsComponent,
		PlanetDetailComponent
	],
	providers: [
		PlanetsService
	]
})
export class PlanetsModule { }

