import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CoreActions } from '../core/core.actions';
import * as coreStore from '../core/core.reducers';

import { MODULES } from '../app.config';
import { CoreComponent } from '../core/core.component';
import { IPlanet } from './planets.model';
import { IState } from '../core/core.model';

@Component({
	selector: 'app-planet-detail',
	template: `
		<h3> PLANET DETAIL </h3>
		<pre>{{ (state$ | async)?.data | json }}</pre>
	`
})
export class PlanetDetailComponent extends CoreComponent<IPlanet> implements OnInit {

	constructor(protected _store: Store<IState<IPlanet>>) {

		super(MODULES.PLANET, _store);
	}

	ngOnInit() {

		// this.state$.subscribe((e: IState<IPlanet>) => console.log(e));

		// this.dispatchGet();


	}

}
