import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoreService } from '../core/core.service';
import { IPlanet } from './planets.model';

const moduleName = 'planets';

@Injectable()
export class PlanetsService extends CoreService<IPlanet> {

	constructor(http: HttpClient) {
		super(moduleName, http);
	}

}
