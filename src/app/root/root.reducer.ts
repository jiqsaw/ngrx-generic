import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot, Params } from '@angular/router';

export interface RouterStateUrl {
	url: string;
	queryParams: Params;
}

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
	serialize(routerState: RouterStateSnapshot): RouterStateUrl {
		const { url } = routerState;
		const queryParams = routerState.root.queryParams;

		return { url, queryParams };
	}
}

import {
	ActionReducerMap,
	ActionReducer,
	MetaReducer,
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {
	routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
	routerReducer: fromRouter.routerReducer,
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
	return localStorageSync({ keys: ['auth'] })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
