import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  gg = 'Hello, welcome to my sample project';

  gg1: string;

  age: number;

  allowNewServer = false;
  serverStatus = 'Server hasnt been created yet';
  serverName = ' ';
  serverCreated = false;
  servers = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverStatus = 'Server has been created. Name is:' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
