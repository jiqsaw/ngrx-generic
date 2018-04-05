import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

import { StarshipsService } from './starships.service';
import { IStarship, IStarshipList } from './starships.model';
import { MODULES } from '../app.config';
import { CoreEffects } from '../core/core.effects';

const moduleName = MODULES.STARSHIP;

@Injectable()
export class StarshipsEffects extends CoreEffects<IStarship, IStarshipList> {

	public constructor(
		private actions$: Actions,
		private service: StarshipsService) {

		super(moduleName, actions$, service);

	}

}
