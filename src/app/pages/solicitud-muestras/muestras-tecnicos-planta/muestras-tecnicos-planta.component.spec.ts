import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestrasTecnicosPlantaComponent } from './muestras-tecnicos-planta.component';

describe('MuestrasTecnicosPlantaComponent', () => {
  let component: MuestrasTecnicosPlantaComponent;
  let fixture: ComponentFixture<MuestrasTecnicosPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuestrasTecnicosPlantaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuestrasTecnicosPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
