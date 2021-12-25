import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplayLargeComponent } from './product-display-large.component';

describe('ProductDisplayLargeComponent', () => {
  let component: ProductDisplayLargeComponent;
  let fixture: ComponentFixture<ProductDisplayLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDisplayLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDisplayLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
