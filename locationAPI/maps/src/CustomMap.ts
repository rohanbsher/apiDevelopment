// import google from 'googlemaps';
//Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
	markerContent(): string;
	color: string;
}
// let car = new Car();
export class CustomMap {
	// googleMap: google.maps.Map;

	private googleMap: google.maps.Map;

	constructor(divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0
			}
		});
	}

	// aproach 1
	// | operator limits the number of properties to commonality b/w User and Company 
	// addMarker(mappable: User | Company): void {
	// 	new google.maps.Marker({
	// 		map: this.googleMap,
	// 		position: {
	// 			lat: mappable.location.lat,
	// 			lng: mappable.location.lng
	// 		}
	// 	});
	// }

	// aproach 2 Real solution
	// Invert the dependency where addMarker is not dependent on User or Company
	// Rather an interface defines what is Mappable
	addMarker(mappable: Mappable): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng
			},
			label: "✈️"
		});

		// marker.setTitle("Yolo")

		marker.addListener('click', () => {
			const infoWindow = new google.maps.InfoWindow({
				content: mappable.markerContent()
			});

			infoWindow.open(this.googleMap, marker)
		});
	}




	// Bad code

	// addUserMarker(user: User): void {
	// 	new google.maps.Marker({
	// 		map: this.googleMap,
	// 		position: {
	// 			lat: user.location.lat,
	// 			lng: user.location.lng
	// 		}
	// 	})
	// }

	// addCompanyMarker(company: Company): void {
	// 	new google.maps.Marker({
	// 		map: this.googleMap,
	// 		position: {
	// 			lat: company.location.lat,
	// 			lng: company.location.lng
	// 		}
	// 	})
	// }

}