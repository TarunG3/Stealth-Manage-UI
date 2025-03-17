import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthTeamComponent } from './stealth-team.component';

describe('StealthTeamComponent', () => {
  let component: StealthTeamComponent;
  let fixture: ComponentFixture<StealthTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StealthTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StealthTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
