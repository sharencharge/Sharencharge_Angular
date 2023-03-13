import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilReservationComponent } from './profil-reservation.component';

describe('ProfilReservationComponent', () => {
  let component: ProfilReservationComponent;
  let fixture: ComponentFixture<ProfilReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
