import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthHeaderComponent } from './stealth-header.component';

describe('StealthHeaderComponent', () => {
  let component: StealthHeaderComponent;
  let fixture: ComponentFixture<StealthHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StealthHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StealthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
