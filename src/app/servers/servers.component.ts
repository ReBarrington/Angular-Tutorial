import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // use either template, with components written, or use templateUrl and point to the html file
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  
  constructor() { 
    // happens when component renders
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
