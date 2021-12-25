import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplaySeparateComponent } from './product-display-separate.component';

describe('ProductDisplaySeparateComponent', () => {
  let component: ProductDisplaySeparateComponent;
  let fixture: ComponentFixture<ProductDisplaySeparateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDisplaySeparateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDisplaySeparateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
