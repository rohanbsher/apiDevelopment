import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap'

// User is capitalized but index is not
// This is because User is used to create and export a class
// Never used default export
// export default 'red';

export class User implements Mappable {
	// Define the properties of the class
	name: string;
	location: {
		lat: number;
		lng: number;
	};
	address: string;
	color: string = 'red';

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		};
		this.address = faker.address.streetAddress();
	};

	markerContent(): string {
		return `
		<div>
			<h1>User Name: ${this.name}</h1>
			<h4>Color : ${this.color}</h4>
		</div>
		`;
	}

}

// console.log(new User().name);
// console.log(new User().location);