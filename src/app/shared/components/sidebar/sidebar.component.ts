import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // linksMenu: Array<any> = [
  //   {
  //     name: 'Home',
  //     icon: 'uil-house-user'
  //   },
  //   {
  //     name: 'Buscar',
  //     icon:'uil-house-user'
  //   }
  // ]


  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }
  customOptions: Array<any> = []



  //La Importacion de este track service es solo de ejemplo porque el servicio esta en otra carpeta

  //ESTO DEBIA IR EN ABAJO
  // , private trackService: TrackService
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
        // de aca debo borrar el auth para que no me saque despues de loguearme
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]



    // TODO DESDE ACA ES SOLO POR EFECTOS DE EJEMPLO
    // this.trackService.dataTracksRandom$.subscribe((response: any) => {
      
    //   this.customOptions.push(
    //     {
    //       name: response[0].name,
    //       router: []
    //     }
    //   );

    // });
  }


  goTo($event:any): void {
    console.log($event);
    this.router.navigate(['/', 'favorites'],{
      queryParams:{
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    

    // URL con Parametros solamente
    // URL con query params
  }

}
