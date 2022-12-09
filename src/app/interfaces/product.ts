import { Rating } from "./rating";

export interface IProduct {
	category: string;
	description: string;
	id: number;
	image: string;
	price: number;
	rating: Rating;
	title: string;
	counter: number;
}
