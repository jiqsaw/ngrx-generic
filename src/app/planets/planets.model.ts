import { IEntity, IList } from '../core/core.model';

export interface IPlanet extends IEntity {
	name: string;
	rotation_period: string;
	orbital_period: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: string;
	population: string;
	residents: string;
	films: string[];
	created: string;
	url: string;
}

export interface IPlanetList extends IList<IPlanet> { }
