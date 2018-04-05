import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { MODULES } from '../app.config';

export module CoreActions {

	export const GET = (moduleName: string) => moduleName + ' | Get';
	export const GET_SUCCESS = (moduleName: string) => moduleName + ' | Get Success';

	export class Get implements ICoreAction {
		readonly type;
		constructor(moduleName: MODULES) {
			this.type = GET(MODULES[moduleName]);
		}
	}

	export class GetSuccess implements ICoreAction {
		readonly type;
		constructor(moduleName: MODULES, public payload: any) {
			this.type = GET_SUCCESS(MODULES[moduleName]);
		}
	}

	export type Actions
		= Get
		| GetSuccess;


	export interface ICoreAction extends Action {
		payload?: any;
	}

}