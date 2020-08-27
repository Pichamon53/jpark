import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PakingSystemComponent } from './paking-system.component';

describe('PakingSystemComponent', () => {
  let component: PakingSystemComponent;
  let fixture: ComponentFixture<PakingSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PakingSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PakingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
