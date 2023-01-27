import axios, { AxiosPromise } from 'axios';

interface HasId {
	id?: number;
}

// new Sync('http://localhost:3000/users')

//  composition through delegation
export class ApiSync<T extends HasId> {

	constructor(public rootUrl: string) { }

	fetch(id: number): AxiosPromise{
		return axios.get(`${this.rootUrl}/${id}`) 
	}

	save(data: T): AxiosPromise {
		// 2015 desctructuring	
		const { id } = data;

		if (id) {
			return axios.put(`${this.rootUrl}/${id}`, data)
		} else {
			return axios.post(this.rootUrl, data)
		}
	}
}