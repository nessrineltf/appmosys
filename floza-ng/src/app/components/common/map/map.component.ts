import { Component, OnInit,ElementRef, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  template: `
    <agm-map
      [latitude]="lat"
      [longitude]="lng"
      [zoom]="2"
      (mapClick)="addMarker($event.coords.lat, $event.coords.lng)"
    >
      <agm-marker
        *ngFor="let marker of markers"
        [latitude]="marker.lat"
        [longitude]="marker.lng"
        [opacity]="marker.alpha"
        [markerDraggable]="true"
        (markerClick)="selectMarker($event)"
      >
      </agm-marker>
      <agm-rectangle
        [north]="max('lat')"
        [east]="max('lng')"
        [south]="min('lat')"
        [west]="min('lng')"
      >
      </agm-rectangle>
    </agm-map>
    <p *ngIf="selectedMarker">
      Lat: {{ selectedMarker.lat }} Lng: {{ selectedMarker.lng }}
    </p>
  `,
  styles: [
    'agm-map { height: 600px; }'
  ],
})
export class MapComponent{
  lat = 48.75606;
  lng = -118.859;

  selectedMarker = null;

  markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    { lat: 22.33159, lng: 105.63233, alpha: 1 },
    { lat: 7.92658, lng: -12.05228, alpha: 1 },
    { lat: 48.75606, lng: -118.859, alpha: 1 },
    { lat: 5.19334, lng: -67.03352, alpha: 1 },
    { lat: 12.09407, lng: 26.31618, alpha: 1 },
    { lat: 47.92393, lng: 78.58339, alpha: 1 }
  ];

  addMarker(lat: number, lng: number) {
    this.markers.push({ lat, lng, alpha: 0.4 });
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }
}
