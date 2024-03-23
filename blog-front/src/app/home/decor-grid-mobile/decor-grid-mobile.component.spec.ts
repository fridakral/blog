import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorGridMobileComponent } from './decor-grid-mobile.component';

describe('DecorGridMobileComponent', () => {
  let component: DecorGridMobileComponent;
  let fixture: ComponentFixture<DecorGridMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecorGridMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecorGridMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
