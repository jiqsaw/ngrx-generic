import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { CoreActions } from './core.actions';
import { MODULES } from '../app.config';
import { CoreService } from './core.service';

export class CoreEffects<T, TList> {

	public constructor(
		private moduleName: MODULES,
		private _actions$: Actions,
		private _service: CoreService<T>) { }

	@Effect()
	get$: Observable<Action> = this._actions$
		.ofType(CoreActions.GET(this.moduleName.toString()))
		.map((action: CoreActions.Get) => action)
		.switchMap((payload) => this._service.get())
		.map((data: TList) => new CoreActions.GetSuccess(this.moduleName, data));

	// @Effect()
	// getById$: Observable<Action> = this.actions$
	// 	.ofType(CoreActions.GET('PLANET'))
	// 	.map((action: CoreActions.Get) => action)
	// 	.switchMap((payload) => this.planetService.get())
	// 	.map((data: T) => new CoreActions.GetSuccess(data));

}
