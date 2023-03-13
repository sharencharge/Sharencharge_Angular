import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilBorneComponent } from './profil-borne.component';

describe('ProfilBorneComponent', () => {
  let component: ProfilBorneComponent;
  let fixture: ComponentFixture<ProfilBorneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilBorneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilBorneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
