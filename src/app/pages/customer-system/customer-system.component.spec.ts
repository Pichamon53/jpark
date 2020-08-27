import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSystemComponent } from './customer-system.component';

describe('CustomerSystemComponent', () => {
  let component: CustomerSystemComponent;
  let fixture: ComponentFixture<CustomerSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
