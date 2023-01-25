interface UserProps	{
	name: string;
	age: number;
}

export class User {
	constructor(private data: UserProps) {	}

	// Type union : cna return either string or number
	get(propName: string): (string | number) {
		return this.data[propName];
	}

	set(update: UserProps): void {
		// Copy all properties from update to this.data 
		// and overwrite any existing properties
		Object.assign(this.data, update);
	}


}



new User({ name: 'John', age: 20 });