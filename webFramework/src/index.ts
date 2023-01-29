// import { User, UserProps } from './models/User';
// import { Collection } from './models/Collection';
// import { UserEdit } from './views/UserEdit';
// import { User } from './models/User';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const users = new Collection('http://localhost:3000/users',
	(json: UserProps) => User.buildUser(json));

users.on('change', () => {
	const root = document.getElementById('root');
	if(root){
		new UserList(root, users).render();

	}
});

users.fetch();


// const user = User.buildUser({ name: 'NAME', age: 20 });

// const root = document.getElementById('root');
// if (root) {
// 	const userEdit = new UserEdit(root, user);
// 	userEdit.render();

// 	console.log(userEdit);
// } else {
// 	throw new Error('Root element not found');
// }











// const collection = new Collection<User, UserProps>(
// 	'http://localhost:3000/users', 
// 	(json: UserProps) => User.buildUser(json)
// );

// const collection = User.buildUserCollection();

// collection.on('change', () => {
// 	console.log(collection);
// });

// collection.fetch();




// import axios from 'axios';

// const user = new User({ id: 1, name: 'Rahul', age: 24 });
// console.log(user.get('name'))

// const user = User.buildUser({ id: 2, name: "Chelsey bazzle" });

// user.on('save', () => {
// 	console.log(user.get('name') + ' was saved');
// });

// user.fetch();
// user.save();
// user.get

// user.on('change', () => {
// 	console.log(user);
// });

// user.trigger('change');

// user.sync.save({ name: 'chelsey', age: 25 });
// let personName = user.attributes.get('name');
// user.attributes.set({ name: 'ed', age: 250 });
// user.sync.save({ name: 'ed', age: 250 });
// personName = user.attributes.get('name');
// console.log(personName);
// user.set({ name: 'ed', age: 250 });
// user.save();

// user.events.on('change', () => {
// 	console.log('change ');
// });	

// user.events.trigger('change');





// user.set({ name: 'newer name', age: 99 });
// user.fetch();

// console.log(user.get('name'));
// user.set({ name: 'new name', age: 9999 })

// axios.post('http://localhost:3000/users', {
// 	name: 'new record',
// 	age: 11
// })

// setTimeout(() => {
// 	console.log(user);
// }, 2000);
// user.on('change', () => {
// 	console.log(user.get('age'));
// });