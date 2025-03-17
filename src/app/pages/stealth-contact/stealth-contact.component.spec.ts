import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthContactComponent } from './stealth-contact.component';

describe('StealthContactComponent', () => {
  let component: StealthContactComponent;
  let fixture: ComponentFixture<StealthContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StealthContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StealthContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
