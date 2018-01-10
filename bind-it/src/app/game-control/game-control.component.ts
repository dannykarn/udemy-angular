import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameControlEvent = new EventEmitter<{}>();
  interval;

  constructor() { }

  ngOnInit() {
  }

  onStartGameControl() {
    this.interval = setInterval(this.emitEvent, 1000, this.gameControlEvent);
  }

  onStopGameControl() {
    clearInterval(this.interval);
  }

  emitEvent(eventEmitter: EventEmitter<{}>) {
    eventEmitter.emit();
  }

}
