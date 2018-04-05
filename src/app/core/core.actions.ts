import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { MODULES } from '../app.config';

export module CoreActions {

	export const GET = (moduleName: string) => moduleName + ' | Get';
	export const GET_SUCCESS = (moduleName: string) => moduleName + ' | Get Success';

	export const GET_BY_ID = (moduleName: string) => moduleName + ' | Get By Id';
	export const GET_BY_ID_SUCCESS = (moduleName: string) => moduleName + ' | Get By Id Success';

	export class Get implements ICoreAction {
		readonly type;
		constructor(moduleName: MODULES) {
			this.type = GET(moduleName.toString());
		}
	}

	export class GetSuccess implements ICoreAction {
		readonly type;
		constructor(moduleName: MODULES, public payload: any) {
			this.type = GET_SUCCESS(moduleName.toString());
		}
	}

	export class GetById implements ICoreAction {
		readonly type;
		readonly id;
		constructor(moduleName: MODULES, id: string) {
			this.type = GET_BY_ID(moduleName.toString());
			this.id = id;
		}
	}

	export class GetByIdSuccess implements ICoreAction {
		readonly type;
		constructor(moduleName: MODULES, public payload: any[]) {
			this.type = GET_BY_ID_SUCCESS(moduleName.toString());
		}
	}

	export type Actions
		= Get
		| GetSuccess
		| GetById
		| GetByIdSuccess;

	export interface ICoreAction extends Action {
		payload?: any;
		id?: string;
	}

}