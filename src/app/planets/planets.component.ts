import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { MODULES } from '../app.config';
import { CoreComponent } from '../core/core.component';
import { IPlanet } from './planets.model';
import { IState } from '../core/core.model';

@Component({
	selector: 'app-planets',
	template: `
		<h4> planets </h4>
		<a [routerLink]="['/planets/', this.extractId(i.url)]" *ngFor="let i of (list$ | async).results">{{ i.name }}</a>
	`
})
export class PlanetsComponent extends CoreComponent<IPlanet> implements OnInit {

	constructor(protected _store: Store<IState<IPlanet>>) {

		super(MODULES.PLANET, _store);
	}

	ngOnInit() {

		// this.state$.subscribe((e: IState<IPlanet>) => console.log(e));

		this.dispatchGet();


	}

}
