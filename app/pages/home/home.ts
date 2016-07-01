import {Component} from "@angular/core";
import {NavController, Platform} from 'ionic-angular';
import {GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, GoogleMapsMarkerOptions} from 'ionic-native';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//const mapConfig: any;

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private map: GoogleMap;

  constructor(private _navController: NavController, private platform: Platform) {
    this.platform.ready().then(() => this.onPlatformReady());
  }


  private onPlatformReady(): void {
    this.map = new GoogleMap('map_canvas');

    GoogleMap.isAvailable().then(() => {
      // this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
      //   () => this.onMapReady(),
      //   () => alert("Error: onMapReady")
      // );

      // this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
      //   (data: any) => {
      //     alert("GoogleMap.onMapReady(): ");
      //   },
      //   () => alert("Error: GoogleMapsEvent.MAP_READY")
      // );

      this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
        alert("GoogleMap.onMapReady(): " + JSON.stringify(data));

        let myPosition = new GoogleMapsLatLng(38.9072, -77.0369);
        console.log("My position is", myPosition);

        this.map.animateCamera({ target: myPosition, zoom: 10 });
      });
    });




  }

  private onMapReady(): void {
    alert('Map ready');
    //this.map.setOptions(mapConfig);
  }
  /*
    pushPage(){
      this._navController.push(SomeImportedPage, { userId: "12345"});
    }
  */
}
