import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingContainerComponent } from './listing-container.component';

describe('ListingContainerComponent', () => {
  let component: ListingContainerComponent;
  let fixture: ComponentFixture<ListingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
