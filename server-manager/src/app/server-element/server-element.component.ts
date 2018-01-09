import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { ServerElement } from '../shared/server-element.model';
import {
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('serverElement') element: ServerElement;
  @Input() name: string;
  @ViewChild('header') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

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
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Header Text Content: ' + this.header.nativeElement.textContent);
    console.log('Paragraph Text Content: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Paragraph Text Content: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Header Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

}
