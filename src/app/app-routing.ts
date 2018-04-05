import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsComponent } from './planets/planets.component';
import { PlanetDetailComponent } from './planets/planet-detail.component';
import { StarshipsComponent } from './starships/starships.component';

export const routes: Routes = [

	{ path: 'planets', component: PlanetsComponent },
	{ path: 'planets/:id', component: PlanetDetailComponent },

	{ path: 'starships', component: StarshipsComponent },
	// { path: 'starships/:id', component: StarshipDetailComponent }

	// { path: '', redirectTo: '/planets', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
