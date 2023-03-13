import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutBorneComponent } from './form-ajout-borne.component';

describe('FormAjoutBorneComponent', () => {
  let component: FormAjoutBorneComponent;
  let fixture: ComponentFixture<FormAjoutBorneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAjoutBorneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAjoutBorneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
