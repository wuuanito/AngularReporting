import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAccesoComponent } from './control-acceso.component';

describe('ControlAccesoComponent', () => {
  let component: ControlAccesoComponent;
  let fixture: ComponentFixture<ControlAccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlAccesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
