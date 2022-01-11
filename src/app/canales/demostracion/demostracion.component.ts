import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demostracion',
  templateUrl: '../../canales/cliente001/cliente001.component.html',
  styleUrls: ['../../canales/cliente001/cliente001.component.scss']
})
export class DemostracionComponent implements OnInit {
  showPlayButton = true;  /*para crear el toggle de play y stop*/
  showStopButton = false; /*para crear el toggle de play y stop*/
  url = '../../assets/media/audioPrueba1.mp3';   /*otro streming*/
  nombreEvento = "Evento: Soy una Demo"
  constructor() { }

  ngOnInit(): void {
  }

}
//https://av03.upstream-media.ch/canal3francais-192.mp3
//https://radiostreaming.cloudserverlatam.com/8102/stream
//https://radiostreaming.cloudserverlatam.com/8104/demo
//http://unlimited1-cl.digitalproserver.com/madero_serena/mp3/icecast.audio
//../../assets/img/imgPortada.jpg
