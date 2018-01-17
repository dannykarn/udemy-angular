import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailHomeComponent } from './recipe-detail-home.component';

describe('RecipeDetailHomeComponent', () => {
  let component: RecipeDetailHomeComponent;
  let fixture: ComponentFixture<RecipeDetailHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
