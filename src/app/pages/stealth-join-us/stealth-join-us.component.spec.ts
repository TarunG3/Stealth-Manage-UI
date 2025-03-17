import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthJoinUsComponent } from './stealth-join-us.component';

describe('StealthJoinUsComponent', () => {
  let component: StealthJoinUsComponent;
  let fixture: ComponentFixture<StealthJoinUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StealthJoinUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StealthJoinUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
