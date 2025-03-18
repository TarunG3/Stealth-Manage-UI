import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreePartsComponent } from './three-parts.component';

describe('ThreePartsComponent', () => {
  let component: ThreePartsComponent;
  let fixture: ComponentFixture<ThreePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreePartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
