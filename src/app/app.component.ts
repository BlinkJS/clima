import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clima } from './clima';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clima: Clima;
  iconos: {}

  constructor(public http: HttpClient) {
    this.get_iconos();
    this.get_ubicacion();
  }

  get_iconos(){
    let estados = [
      'Clear',
      'Clear-night',
      'Partly-cloudy-day',
      'Partly-cloudy-night',
      'Clouds',
      'Rain',
      'Sleet',
      'Snow',
      'Wind',
      'Fog'
    ];
    this.iconos = {};
    for(let estado of estados){
      this.iconos[estado] = new Image();
      this.iconos[estado].src = './assets/img/iconos/' + estado + '.png';
    }
  }

  get_ubicacion() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat: number = position.coords.latitude;
        let long: number = position.coords.longitude;
        this.get_clima(lat, long);
      });
    }
  }

  get_clima(latitud: number, longitud: number) {
    this.http.get('https://fcc-weather-api.glitch.me/api/current?lat=' + latitud + '&lon=' + longitud).subscribe(
      result => {
        let r: any = result;
        this.clima = new Clima(r.name, r.main.temp, r.weather[0].main, r.weather[0].description);
        //setTimeout(this.get_clima.bind(this), 10000, latitud, longitud);
      }
    );
  }

}
