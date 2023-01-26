import { User } from './models/User';
// import axios from 'axios';

const user = new User({ id: 2 });
// user.set({ name: 'newer name', age: 99 });
user.fetch();

// console.log(user.get('name'));
// user.set({ name: 'new name', age: 9999 })

// axios.post('http://localhost:3000/users', {
// 	name: 'new record',
// 	age: 11
// })

setTimeout(() => {
	console.log(user);
}, 2000);
// user.on('change', () => {
// 	console.log(user.get('age'));
// });