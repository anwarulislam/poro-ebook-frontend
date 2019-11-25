import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DokanComponent } from './dokan.component';

describe('DokanComponent', () => {
  let component: DokanComponent;
  let fixture: ComponentFixture<DokanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DokanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
