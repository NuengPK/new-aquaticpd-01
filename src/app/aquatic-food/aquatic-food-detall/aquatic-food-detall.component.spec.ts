import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaticFoodDetallComponent } from './aquatic-food-detall.component';

describe('AquaticFoodDetallComponent', () => {
  let component: AquaticFoodDetallComponent;
  let fixture: ComponentFixture<AquaticFoodDetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquaticFoodDetallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquaticFoodDetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
