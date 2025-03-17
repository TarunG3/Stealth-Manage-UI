import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthPortfolioDetailComponent } from './stealth-portfolio-detail.component';

describe('StealthPortfolioDetailComponent', () => {
  let component: StealthPortfolioDetailComponent;
  let fixture: ComponentFixture<StealthPortfolioDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StealthPortfolioDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StealthPortfolioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
