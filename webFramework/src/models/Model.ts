import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
	get<K extends keyof T>(key: K): T[K];
	set(value: T): void;
	getAll(): T;
}

interface Sync<T> {
	fetch(id: number): AxiosPromise;
	save(data: T): AxiosPromise;
}

interface Events {
	on(eventName: string, classback: () => void): void;
	trigger(eventName: string): void;
}

//tells typescript that T has to have an id property
interface HasId {
	id?: number;
}

export class Model<T extends HasId >{

	constructor(
		private attributes: ModelAttributes<T>,
		private events: Events,
		private sync: Sync<T>
	) {	}

	// Pass through methods 
	// shorter version only use if the intialization is Not done inside the constrtuctor
	// wo properties are assigned properly
	// on = this.events.on;
	// trigger = this.events.trigger;
	// get = this.attributes.get;

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	get get() {
		return this.attributes.get;
	}

	// Needs coordination
	set(update: T): void {
		this.attributes.set(update);
		this.events.trigger('change');
	}

	fetch(): void {
		const id = this.attributes.get('id');
		if (typeof id !== 'number') {
			throw new Error('Cannot fetch without an id');
		}

		this.sync.fetch(id).then((response: AxiosResponse): void => {
			this.set(response.data)
		})
	}

	save(): void {
		this.sync.save(this.attributes.getAll())
			.then((response: AxiosResponse): void => {
				this.trigger('save');
			})
			.catch(() => {
				this.trigger('error');
			});
	}

}