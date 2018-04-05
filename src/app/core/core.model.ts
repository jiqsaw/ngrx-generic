import { HttpErrorResponse } from '@angular/common/http';

export interface IEntity {
	id?: string;
}

export interface IList<T> {
	count: number;
	next: string;
	previous?: any;
	results: T[];
}

export interface IState<T> {
	isLoading: boolean;
	data: T[];
	list: IList<T>;
	error: HttpErrorResponse;
	success: string;
}
