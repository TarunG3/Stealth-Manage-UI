import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthPortfolioComponent } from './stealth-portfolio.component';

describe('StealthPortfolioComponent', () => {
  let component: StealthPortfolioComponent;
  let fixture: ComponentFixture<StealthPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StealthPortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StealthPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
