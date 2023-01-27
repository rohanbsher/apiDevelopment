import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';

export interface UserProps {
	// Optional properties
	id?: number; // indicates the object is saved to the server
	name?: string;
	age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
	// public events: Eventing = new Eventing();
	// public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
	// public attributes: Attributes<UserProps>;

	// constructor(attrs: UserProps) {
	// 	this.attributes = new Attributes<UserProps>(attrs);
	// }

	static buildUser(attrs: UserProps): User {
		return new User(
			new Attributes<UserProps>(attrs),
			new Eventing(),
			new ApiSync<UserProps>(rootUrl)
		);
	}

}



