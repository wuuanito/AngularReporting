import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLogisticaComponent } from './formulario-logistica.component';

describe('FormularioLogisticaComponent', () => {
  let component: FormularioLogisticaComponent;
  let fixture: ComponentFixture<FormularioLogisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioLogisticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioLogisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
