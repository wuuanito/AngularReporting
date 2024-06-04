import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaComponent } from './gerencia.component';

describe('GerenciaComponent', () => {
  let component: GerenciaComponent;
  let fixture: ComponentFixture<GerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
