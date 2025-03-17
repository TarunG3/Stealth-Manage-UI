import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthFooterComponent } from './stealth-footer.component';

describe('StealthFooterComponent', () => {
  let component: StealthFooterComponent;
  let fixture: ComponentFixture<StealthFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StealthFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StealthFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
