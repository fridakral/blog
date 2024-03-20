import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorGridComponent } from './decor-grid.component';

describe('DecorGridComponent', () => {
  let component: DecorGridComponent;
  let fixture: ComponentFixture<DecorGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecorGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
