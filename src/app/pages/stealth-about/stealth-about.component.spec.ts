import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthAboutComponent } from './stealth-about.component';

describe('StealthAboutComponent', () => {
  let component: StealthAboutComponent;
  let fixture: ComponentFixture<StealthAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StealthAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StealthAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
