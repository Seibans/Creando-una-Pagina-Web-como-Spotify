import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

//TODO ESTO QUE SE COMENTA ES SOLO EJEMPLO O MAQUETACION DE LO QUE ES CONSUMIR DESDE UNA DATA DE ACA CREO
// import * as dataRaw from '../../../../data/tracks.json'


// Se agarra como data cruda
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    // const observer1$ = this.trackService.dataTracksTrending$.subscribe(response => {
    //   this.tracksTrending = response;
    //   this.tracksRandom = response;
    //   console.log('Canciones Trending',response);
    // });

    // const observer2$ = this.trackService.dataTracksRandom$.subscribe(response => {
    //   this.tracksRandom = [... this.tracksRandom, ...response]
    //   // Como esta llegando un array podemos arriba concatenar un array
    //   console.log('Canciones Random Entrando...',response);
    // });

    // this.listObservers$ = [observer1$, observer2$]
    this.cargarDataArriba();
    this.cargarDataAbajo();
  }

  async cargarDataArriba():Promise<void>{
    const dataRaw = await this.trackService.getMusicas$().subscribe({
      next: (response:TrackModel[]) => {
        this.tracksTrending = response;
      },
      // error: err => {
      //   console.log(err.error.msg,'Error de conexion');
      // }
    });
    console.log(dataRaw);
    
  }



  cargarDataAbajo():void{
    this.trackService.getMusicasRandom$().subscribe(
      //lo que llega es un objeto de data y dentro estan las canciones
    //pero solo quiero que llegue el array con las canciones
      (response:TrackModel[]) => {
        this.tracksRandom = response;
        console.log('---', response);
      }
    )
  }

  ngOnDestroy(): void {
    // this.listObservers$.forEach(u => u.unsubscribe())
  }

}
