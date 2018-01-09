import { Component } from '@angular/core';

import { ServerElement } from './shared/server-element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: ServerElement[] = [new ServerElement('server', 'Test Server', 'This is a test!')];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push(new ServerElement('server', serverData.serverName, serverData.serverContent));
  }

  onBlueprintAdded(blueprintData: { blueprintName: string, blueprintContent: string }) {
    this.serverElements.push(new ServerElement('blueprint', blueprintData.blueprintName, blueprintData.blueprintContent));
  }

  onChangeFirst() {
    this.serverElements[0].name = "Changed the first name!";
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

}
