import { IList, IEntity } from '../core/core.model';

export interface IStarship extends IEntity {
	name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: string;
	length: string;
	max_atmosphering_speed: string;
	crew: string;
	passengers: string;
	cargo_capacity: string;
	consumables: string;
	hyperdrive_rating: string;
	MGLT: string;
	starship_class: string;
	pilots: any[];
	films: string[];
	created: Date;
	edited: Date;
	url: string;
}

export interface IStarshipList extends IList<IStarship> { }
