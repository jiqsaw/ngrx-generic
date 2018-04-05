import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { CoreActions } from './core.actions';
import { PlanetsService } from '../planets/planets.service';
import { IPlanetList } from '../planets/planets.model';
import { MODULES } from '../app.config';

@Injectable()
export class CoreEffects<T> {

	public constructor(
		private actions$: Actions,
		private planetService: PlanetsService) { }

	@Effect()
	get$: Observable<Action> = this.actions$
		.ofType(CoreActions.GET('PLANET'))
		.map((action: CoreActions.Get) => action)
		.switchMap((payload) => this.planetService.get())
		.map((data: IPlanetList) => new CoreActions.GetSuccess(MODULES.PLANET, data));

	// @Effect()
	// getById$: Observable<Action> = this.actions$
	// 	.ofType(CoreActions.GET('PLANET'))
	// 	.map((action: CoreActions.Get) => action)
	// 	.switchMap((payload) => this.planetService.get())
	// 	.map((data: T) => new CoreActions.GetSuccess(data));

}
