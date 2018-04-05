import { createFeatureSelector, createSelector, ActionReducerMap, Action, MemoizedSelector } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { MODULES } from '../app.config';
import { CoreActions } from './core.actions';
import { IState } from './core.model';

export const reducer = (moduleName: MODULES) => {

	return function handler(state: IState<any> = null, action: CoreActions.ICoreAction) {

		switch (action.type) {

			case CoreActions.GET(moduleName.toString()):
				return Object.assign({}, state, {
					isLoading: true,
				});

			case CoreActions.GET_SUCCESS(moduleName.toString()):
				return Object.assign({}, state, {
					isLoading: false,
					list: action.payload
				});

			case CoreActions.GET_BY_ID(moduleName.toString()):
				return Object.assign({}, state, {
					isLoading: true,
				});

			case CoreActions.GET_BY_ID_SUCCESS(moduleName.toString()):
				return Object.assign({}, state, {
					isLoading: false,
					data: [
						action.payload,
						...state.data
					]
				});

			default:
				return state;

		}
	};

};