import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-manager',
  templateUrl: './server-manager.component.html',
  styleUrls: ['./server-manager.component.css']
})
export class ServerManagerComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();;
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput;

  constructor() { }


  /**
   * Angular Component Lifecycle:
   *    ngOnChanges - Called after a bound input property changes
   *    ngOnInit - Called once the component is initialized
   *    ngDoCheck - Called during every change detection run
   *    ngAfterContentInit - Called after content (ng-content) has been projected into view
   *    ngAfterContentChecked - Called every time the projected content has been checked
   *    ngAfterViewInit - Called after the component's view (and child views) have been initialized
   *    ngAfterViewChecked - Called every time the view (and child views) have been checked
   *    ngOnDestroy - Called once the component is about to be destroyed
   * 
   */
  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: serverNameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    });
  }

}
