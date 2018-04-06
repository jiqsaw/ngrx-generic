import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { reducer } from '../core/core.reducer';
import { StarshipsComponent } from './starships.component';
import { StarshipsService } from './starships.service';
import { MODULES } from '../app.config';
import { CoreEffects } from '../core/core.effects';
// import { PlanetDetailComponent } from './planet-detail.component';
import { StarshipsEffects } from './starships.effects';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule,
		StoreModule.forFeature(MODULES[MODULES.STARSHIP], reducer(MODULES.STARSHIP)),
		EffectsModule.forFeature([
			StarshipsEffects
		])
	],
	declarations: [
		StarshipsComponent,
		// PlanetDetailComponent
	],
	providers: [
		StarshipsService
	]
})
export class StarshipsModule { }

