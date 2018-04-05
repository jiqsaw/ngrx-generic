import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoreService } from '../core/core.service';
import { IStarship } from './starships.model';

const moduleName = 'starships';

@Injectable()
export class StarshipsService extends CoreService<IStarship> {

	constructor(http: HttpClient) {
		super(moduleName, http);
	}

}
