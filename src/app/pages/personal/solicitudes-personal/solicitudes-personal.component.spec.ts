import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPersonalComponent } from './solicitudes-personal.component';

describe('SolicitudesPersonalComponent', () => {
  let component: SolicitudesPersonalComponent;
  let fixture: ComponentFixture<SolicitudesPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudesPersonalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudesPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
