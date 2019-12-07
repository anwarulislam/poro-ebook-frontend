import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BechakenaComponent } from './bechakena.component';

describe('BechakenaComponent', () => {
  let component: BechakenaComponent;
  let fixture: ComponentFixture<BechakenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BechakenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BechakenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
