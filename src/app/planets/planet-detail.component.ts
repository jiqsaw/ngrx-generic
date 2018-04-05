import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CoreActions } from '../core/core.actions';
import * as coreStore from '../core/core.reducers';

import { MODULES } from '../app.config';
import { CoreComponent } from '../core/core.component';
import { IPlanet } from './planets.model';
import { IState } from '../core/core.model';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-planet-detail',
	template: `
		<h4> planet detail </h4>
		<pre>{{ (data$ | async) | json }}</pre>
		<a routerLink="/planets"> < back </a>
	`
})
export class PlanetDetailComponent extends CoreComponent<IPlanet> implements OnInit {

	constructor(
		private route: ActivatedRoute,
		protected _store: Store<IState<IPlanet>>
	) {

		super(MODULES.PLANET, _store);
	}

	ngOnInit() {

		// this.state$.subscribe((e: IState<IPlanet>) => console.log(e));

		this.route.params.subscribe(params => {
			if (params['id'] !== undefined) {
				this.dispatchGetById(params['id']);
			}
		});


	}

}
