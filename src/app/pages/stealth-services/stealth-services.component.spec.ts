import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthServicesComponent } from './stealth-services.component';

describe('StealthServicesComponent', () => {
  let component: StealthServicesComponent;
  let fixture: ComponentFixture<StealthServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StealthServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StealthServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
