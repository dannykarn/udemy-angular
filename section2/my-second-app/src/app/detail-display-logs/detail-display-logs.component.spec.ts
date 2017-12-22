import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDisplayLogsComponent } from './detail-display-logs.component';

describe('DetailDisplayLogsComponent', () => {
  let component: DetailDisplayLogsComponent;
  let fixture: ComponentFixture<DetailDisplayLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDisplayLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDisplayLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
