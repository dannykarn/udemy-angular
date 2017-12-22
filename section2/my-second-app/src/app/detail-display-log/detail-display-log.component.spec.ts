import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDisplayLogComponent } from './detail-display-log.component';

describe('DetailDisplayLogComponent', () => {
  let component: DetailDisplayLogComponent;
  let fixture: ComponentFixture<DetailDisplayLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDisplayLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDisplayLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
