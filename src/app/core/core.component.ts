import { Component, OnInit } from '@angular/core';
import { Store, MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CoreActions } from '../core/core.actions';

import { MODULES } from '../app.config';
import { IEntity, IState } from './core.model';

@Component({})
export abstract class CoreComponent<T> {

	getFractalState = createFeatureSelector<IState<T>>(MODULES[this.module]);
	getState = createSelector(this.getFractalState, (state: IState<T>) => state);

	state$: Store<IState<T>> = this.store.select(this.getState);

	constructor(
		private module: MODULES,
		protected store: Store<IState<T>>
	) { }

	protected dispatchGet() {

		this.store.dispatch(new CoreActions.Get(this.module));
	}

	protected extractId(url: string): string {
		const matches = url.match(/\/(\d+)(?:.(?!\/\d+))+$/);
		return matches === null ? null : parseInt(matches[1], 10).toString();
	}

}
