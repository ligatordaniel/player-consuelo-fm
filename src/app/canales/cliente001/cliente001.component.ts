import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente001',
  templateUrl: '../../canales/cliente001/cliente001.component.html',
  styleUrls: ['../../canales/cliente001/cliente001.component.scss']
})
export class Cliente001Component implements OnInit {
  showPlayButton = true;  /*para crear el toggle de play y stop*/
  showStopButton = false; /*para crear el toggle de play y stop*/
  url = 'https://sonando-us.digitalproserver.com/consuelo.mp3';   /*streaming actual*/
  nombreEvento = "";
  constructor() { }

  ngOnInit(): void {
    console.log("nuevo url");
  }

  refresh(): void {
    window.location.reload();
  }

}
