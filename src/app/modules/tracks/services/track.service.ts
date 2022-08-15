import { environment } from './../../../../environments/environment';
//ASEGURARSE DE QUE EL ENVIRONMENT SEA EL NORMAL Y NO EL PROD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import {  observable, Observable, of , tap, catchError} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
// import * as dataRaw from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  // dataTracksTrending$: Observable<TrackModel[]> = of([]);
  // dataTracksRandom$: Observable<any> = of([]);

  private readonly URL = environment.api;

  constructor(private http: HttpClient) {

    //ESTO ES SOLO UN EJEMPLO DE COMO SE CRE UN OBSERVABLE Y COMO SE SUBSCRIBE



    // const {data}:any = (dataRaw as any).default;
    // this.dataTracksTrending$ = of(data);
    // //OTRA FORMA DE HACER LO MISMO DE ARRIBA PARA COLOCAR UN NUEVO ARCHIVO PERO LUEGO LO VA A QUITAR
    // this.dataTracksRandom$ = new Observable((observer) => {
    //   const trackExample: TrackModel = {
    //     _id: 9,
    //     name: 'As It Was',
    //     album: 'Harry\'s House',
    //     url:'http://',
    //     cover: 'https://www.lahiguera.net/musicalia/artistas/harry_styles/disco/12079/harry_styles_harrys_house-portada.jpg'
    //   }
    //   setTimeout(() => {
    //     observer.next([trackExample])
    //   }, 3000);

    // })
  }


  private skipById(listaCanciones: TrackModel[], id: number):Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listaCanciones.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }


  //ESTE ES EL METODO DE DEVOLVER TODAS LAS CANCIONES

  getMusicas$(): Observable<any> {
    //LO QUE RETORNA ESTO ES UN OBSERVABLE  
    //ACA YA PUEDES HACER PETICIONES CRUD
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({ data }: any)=>{
        return data
      })
    )
    //nos suscribimos donde hagamos el llamado de este metodo
    //Alos observables se le pueden hacer uso de pipes
  }


  getMusicasRandom$(): Observable<any> {
    //LO QUE RETORNA ESTO ES UN OBSERVABLE  
    //ACA YA PUEDES HACER PETICIONES CRUD
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      // map(({ data }: any)=>{
      //   return data.reverse()
      // }),
      tap(data => console.log('Data del servicio',data)),

      mergeMap(({ data }: any)=> this.skipById(data, 1)),
      //Este es un filtro de canciones de David Gueta
      // map((dataRevertida) => {
      //   return dataRevertida.filter((track: TrackModel) => track._id !== 1)
      // })
      tap(data => console.log('Data del servicio luego de mapearse',data)),
      catchError((err) => {
        const { status, statusText } = err;
        console.log('Algo Paso Revisame!!!  --> ', [status, statusText]);
        return of([])
      })
    )
    //nos suscribimos donde hagamos el llamado de este metodo
    //Alos observables se le pueden hacer uso de pipes
  }
}
