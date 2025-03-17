import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthExpertDetailComponent } from './stealth-expert-detail.component';

describe('StealthExpertDetailComponent', () => {
  let component: StealthExpertDetailComponent;
  let fixture: ComponentFixture<StealthExpertDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StealthExpertDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StealthExpertDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
