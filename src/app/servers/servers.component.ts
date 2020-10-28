import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // use either template, with components written, or use templateUrl and point to the html file
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
