
// function that takes no arguments and returns nothing
type Callback = () => void;

export class Eventing {

	// events is an object with different keys of type string and they 
	// point to values of Callback array
	events: { [key: string]: Callback[] } = {};

	on = (eventName: string, callback: Callback): void => {
		// this.events[eventName] // callback [] or undefined
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}

	trigger = (eventName: string): void => {
		const handlers = this.events[eventName];

		if (!handlers || handlers.length === 0) {
			return;
		}

		handlers.forEach(callback => {
			callback();
		})
	}
} 