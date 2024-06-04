import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaHorasComponent } from './bolsa-horas.component';

describe('BolsaHorasComponent', () => {
  let component: BolsaHorasComponent;
  let fixture: ComponentFixture<BolsaHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsaHorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BolsaHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
