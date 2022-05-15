import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistridutionListComponent } from './distridution-list.component';

describe('DistridutionListComponent', () => {
  let component: DistridutionListComponent;
  let fixture: ComponentFixture<DistridutionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistridutionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistridutionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
