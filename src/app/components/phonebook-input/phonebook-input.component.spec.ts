import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookInputComponent } from './phonebook-input.component';

describe('PhonebookInputComponent', () => {
  let component: PhonebookInputComponent;
  let fixture: ComponentFixture<PhonebookInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonebookInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
