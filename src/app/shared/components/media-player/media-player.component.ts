import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';  //PROGRAMACION REACTIVA

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy{


  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    album: 'Gioli & Assi',
    name: 'BEBE (Oficial)',
    url: 'http://localhost/track.mp3',
    _id: 1
  }



  listObservers$: Array<Subscription> = [];


  constructor(private multimediaService: MultimediaService) { }


  //ESTE ES EL PRIMERO QUE SE EJECUTA
  ngOnInit(): void {
    //nos suscribimos
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo cancion....', response);
      }
    )


    this.listObservers$ = [observer1$]
  }

  //ESTE ES EL ULTIMO QUE SE EJECUTA AL CAMBIAR DE COMPONENTE
  ngOnDestroy(): void {
    //debemos desuscribirnos al salir del cliente
    this.listObservers$.forEach(u => u.unsubscribe);
    console.log('DESUSCRIBIDO Y DESTRUIDO');
    
  }

}
