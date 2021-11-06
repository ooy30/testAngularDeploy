import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataDialogTestComponent } from './add-data-dialog-test.component';

describe('AddDataDialogTestComponent', () => {
  let component: AddDataDialogTestComponent;
  let fixture: ComponentFixture<AddDataDialogTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataDialogTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataDialogTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
