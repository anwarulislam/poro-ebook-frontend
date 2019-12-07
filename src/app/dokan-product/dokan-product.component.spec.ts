import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DokanProductComponent } from './dokan-product.component';

describe('DokanProductComponent', () => {
  let component: DokanProductComponent;
  let fixture: ComponentFixture<DokanProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokanProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DokanProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
