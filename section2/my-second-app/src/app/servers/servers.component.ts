import { Component, OnInit } from '@angular/core';

/*
ServersComponent and the associated files and folders were generated via an angular-cli command:
    ng generate component <component name>
                OR
    ng g c <component name>

The command also updates app.component.ts so the new component is ready to be used.
*/

/**
 * Either templateUrl or template is necessary for the @Component decoration.
 * templateUrl refers to an html file, whereas, template is an html string.
 * 
 * We can select the component by attribute by wrapping it in square brackets.
 * The Component can then be referenced via an html attribute on a tag.
 * 
 * We can select the component by class by prefixing it with a period.
 * The component can then be referenced via the html class.
 * 
 * Selecting by id does not work.
 */
@Component({
  //selector: 'app-servers',
  //selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  /*
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  */
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = 'Server name not yet defined.';
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Server name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    // console.log(event.target.value);
    this.serverName = event.target.value;
  }

}
