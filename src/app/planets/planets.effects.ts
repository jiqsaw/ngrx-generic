import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

import { PlanetsService } from '../planets/planets.service';
import { IPlanet, IPlanetList } from '../planets/planets.model';
import { MODULES } from '../app.config';
import { CoreEffects } from '../core/core.effects';

const moduleName = MODULES.PLANET;

@Injectable()
export class PlanetsEffects extends CoreEffects<IPlanet, IPlanetList> {

	public constructor(
		private actions$: Actions,
		private service: PlanetsService) {

		super(moduleName, actions$, service);

	}

}
