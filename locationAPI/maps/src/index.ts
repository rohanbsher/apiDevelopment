import { User } from './User';
import { Company } from './Company';
// import { google }
// import red from './User'
// This is the entry point for your application
import { CustomMap } from './CustomMap';

const customMap = new CustomMap('map');
const user = new User();
const company = new Company();
customMap.addMarker(user);
customMap.addMarker(company);
user.markerContent();


// const customMap = new CustomMap();
// customMap.addMarker({ lat: 0, lng: 0 });

// const user = new User();
// const company = new Company();

// console.log(company);
// console.log(user); 
// console.log(user.address);


// let map: google.maps.Map;

// map =  new google.maps.Map(document.getElementById('map') as HTMLElement, {
// 	center: { lat: 0, lng: 0 },
//     zoom: 2,
// 	streetViewControl: true,
// 	// backgroundColor: 'blue'

// });


// function initMap(): void {
//   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// console.log(data);