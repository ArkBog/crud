import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDatabaseComponent } from './customer-database.component';

describe('CustomerDatabaseComponent', () => {
  let component: CustomerDatabaseComponent;
  let fixture: ComponentFixture<CustomerDatabaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDatabaseComponent]
    });
    fixture = TestBed.createComponent(CustomerDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
