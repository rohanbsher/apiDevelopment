export class Attributes<T> {
	constructor(private data: T) {}	

	// Limiting the type K could be to only the keys of T
	// we can only call get with age name and id
	// return type is T[K] which means it return the value at the key K
	// setup as arrow function so that this is bound to the instance of Attributes
	// thing to left of the function call 
	get = <K extends keyof T>(key: K): T[K] => {
		return this.data[key];
		// attribute.data[key]
	}

	set(update: T): void {
		// Copy all properties from update to this.data 
		// and overwrite any existing properties
		Object.assign(this.data, update);
	}

	getAll(): T {
		return this.data;
	}
}
