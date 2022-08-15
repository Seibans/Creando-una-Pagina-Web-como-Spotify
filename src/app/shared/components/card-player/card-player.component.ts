import { TrackModel } from '@core/models/tracks.model';
import { Component, Input, OnInit } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {


  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = {_id:0,name:'',album:'', url:'', cover: ''};


  constructor(private multimediaservice: MultimediaService) { }

  ngOnInit(): void {
  }

  enviarMusica(track: TrackModel):void{
    console.log('Enviando canción al reproductor......', track);
    
    this.multimediaservice.callback.emit(track)
  }

}
