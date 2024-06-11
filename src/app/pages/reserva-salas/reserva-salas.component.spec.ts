import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaSalasComponent } from './reserva-salas.component';

describe('ReservaSalasComponent', () => {
  let component: ReservaSalasComponent;
  let fixture: ComponentFixture<ReservaSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaSalasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservaSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
