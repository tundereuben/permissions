import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeDashboardComponent } from './prime-dashboard.component';

describe('PrimeDashboardComponent', () => {
  let component: PrimeDashboardComponent;
  let fixture: ComponentFixture<PrimeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
