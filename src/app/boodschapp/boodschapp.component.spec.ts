import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoodschappComponent } from './boodschapp.component';

describe('BoodschappComponent', () => {
  let component: BoodschappComponent;
  let fixture: ComponentFixture<BoodschappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoodschappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoodschappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
