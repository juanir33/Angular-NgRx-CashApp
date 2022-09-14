import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeOutflowComponent } from './income-outflow.component';

describe('IncomeOutflowComponent', () => {
  let component: IncomeOutflowComponent;
  let fixture: ComponentFixture<IncomeOutflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeOutflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeOutflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
