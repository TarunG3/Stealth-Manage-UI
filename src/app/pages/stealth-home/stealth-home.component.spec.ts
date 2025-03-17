import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthHomeComponent } from './stealth-home.component';

describe('StealthHomeComponent', () => {
  let component: StealthHomeComponent;
  let fixture: ComponentFixture<StealthHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StealthHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StealthHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
