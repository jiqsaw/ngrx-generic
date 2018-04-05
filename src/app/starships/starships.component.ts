import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { MODULES } from '../app.config';
import { CoreComponent } from '../core/core.component';
import { IStarship } from './starships.model';
import { IState } from '../core/core.model';

@Component({
	selector: 'app-starships',
	template: `
		<h4> starships </h4>
		<a [routerLink]="['/starships/', this.extractId(i.url)]" *ngFor="let i of (state$ | async)?.list?.results">{{ i.name }}</a>
	`
})
export class StarshipsComponent extends CoreComponent<IStarship> implements OnInit {

	constructor(protected _store: Store<IState<IStarship>>) {

		super(MODULES.STARSHIP, _store);
	}

	ngOnInit() {

		// this.state$.subscribe((e: IState<IPlanet>) => console.log(e));

		this.dispatchGet();


	}

}
