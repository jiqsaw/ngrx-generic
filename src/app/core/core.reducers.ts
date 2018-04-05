import { createFeatureSelector, createSelector, ActionReducerMap, Action, MemoizedSelector } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { MODULES } from '../app.config';
import { CoreActions } from './core.actions';
import { IState } from './core.model';

const initialState: IState<any> = {
	isLoading: false,
	data: null,
	list: null,
	error: null,
	success: null
};

export const reducer = (moduleName: MODULES) => {

	return function handler(state: IState<any> = initialState, action: CoreActions.ICoreAction) {

		switch (action.type) {

			case CoreActions.GET(MODULES[moduleName]):
				return Object.assign({}, state, {
					isLoading: true,
				});

			case CoreActions.GET_SUCCESS(MODULES[moduleName]):
				return Object.assign({}, state, {
					isLoading: false,
					list: action.payload
				});

			default:
				return state;

		}
	};

};