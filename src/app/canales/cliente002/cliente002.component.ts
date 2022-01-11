import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente002',
  templateUrl: '../../canales/cliente001/cliente001.component.html',
  styleUrls: ['../../canales/cliente001/cliente001.component.scss']
})
export class Cliente002Component implements OnInit {
  showPlayButton = true;  /*para crear el toggle de play y stop*/
  showStopButton = false; /*para crear el toggle de play y stop*/
  url = 'https://radiostreaming.cloudserverlatam.com/8102/stream';   /*streaming actual*/
  nombreEvento = "Hola, Soy el nombre del evento"
  constructor() { }

  ngOnInit(): void {
  }

}
