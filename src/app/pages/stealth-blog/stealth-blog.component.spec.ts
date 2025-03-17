import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StealthBlogComponent } from './stealth-blog.component';

describe('StealthBlogComponent', () => {
  let component: StealthBlogComponent;
  let fixture: ComponentFixture<StealthBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StealthBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StealthBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
