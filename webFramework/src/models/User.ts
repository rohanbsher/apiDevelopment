import axios, { AxiosResponse } from 'axios';

interface UserProps	{
	// Optional properties
	id?: number; // indicates the object is saved to the server
	name?: string;
	age?: number;
}

// function that takes no arguments and returns nothing
type Callback = () => void;

export class User {

	// events is an object with different keys of type string and they 
	// point to values of Callback array
	events: { [key: string]: Callback[] } = {};

	constructor(private data: UserProps) {	}

	// Type union : can return either string or number
	get(propName: string): string | number {
		return this.data[propName];
	}

	set(update: UserProps): void {
		// Copy all properties from update to this.data 
		// and overwrite any existing properties
		Object.assign(this.data, update);
	}


	// calls type alias on callback
	on(eventName: string, callback: Callback): void {
		// this.events[eventName] // callback [] or undefined
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}

	trigger(eventName: string): void {
		const handlers = this.events[eventName];

		if (!handlers || handlers.length === 0) {
			return;
		}

		handlers.forEach(callback => {
			callback();
		})
	}

	fetch(): void {
		axios.get(`http://localhost:3000/users/${this.get('id')}`)
			.then((response: AxiosResponse): void => {
				this.set(response.data);
			});
	}
}


