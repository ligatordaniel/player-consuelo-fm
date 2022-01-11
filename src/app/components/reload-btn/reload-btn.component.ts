import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reload-btn',
  templateUrl: './reload-btn.component.html',
  styleUrls: ['./reload-btn.component.scss']
})
export class ReloadBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  refresh(): void {
    window.location.reload();
  }

}
