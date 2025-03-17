import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentWorkCardComponent } from './recent-work-card.component';

describe('RecentWorkCardComponent', () => {
  let component: RecentWorkCardComponent;
  let fixture: ComponentFixture<RecentWorkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentWorkCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentWorkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
