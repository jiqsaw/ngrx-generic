import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { IEntity } from './core.model';

export abstract class CoreService<T extends IEntity> {

	get apiUrl(): string {
		return environment.apiUrl + this.entityName + '/';
	}

	constructor(private entityName: string, protected http: HttpClient) { }

	public get(): Observable<any> {

		return this.http.get(this.apiUrl);

	}

	public getById(id: string): Observable<any> {

		const requestUrl = this.apiUrl + id + '/';

		return this.http.get(requestUrl);

	}

}
