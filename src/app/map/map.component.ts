import { Component, OnInit } from '@angular/core';
import {AppComponentService} from '../app.component.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers:[AppComponentService]
})
export class MapComponent implements OnInit {
  public title = 'ng-analytics';
  public style= 'mapbox://styles/mapbox/streets-v9';
  public point;
  map: mapboxgl.Map;

  constructor(private appComponentService: AppComponentService) {}
  async ngOnInit(){

    (mapboxgl as any).accessToken = environment.mapbox.accessToken

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 9,
      center: [-104.96337890625, 39.80009595634838]
    });

    this.map.on("load", () => {
      this.onMapLoad();
    });
  }

  private onMapLoad(){

    /* this.appComponentService.getFeatures().subscribe((features: Array<any>) => {
       features.forEach((feature) => {
        new mapboxgl.Marker()
        .setLngLat([feature.lon, feature.lat])
        .addTo(this.map);
       });
       
     }) */
  }
}
