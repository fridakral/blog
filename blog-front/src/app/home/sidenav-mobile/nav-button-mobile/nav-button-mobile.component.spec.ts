import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonMobileComponent } from './nav-button-mobile.component';

describe('NavButtonMobileComponent', () => {
  let component: NavButtonMobileComponent;
  let fixture: ComponentFixture<NavButtonMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavButtonMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavButtonMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
