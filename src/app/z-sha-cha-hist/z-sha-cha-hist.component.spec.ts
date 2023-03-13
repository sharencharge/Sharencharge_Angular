import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZShaChaHistComponent } from './z-sha-cha-hist.component';

describe('ZShaChaHistComponent', () => {
  let component: ZShaChaHistComponent;
  let fixture: ComponentFixture<ZShaChaHistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZShaChaHistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZShaChaHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
