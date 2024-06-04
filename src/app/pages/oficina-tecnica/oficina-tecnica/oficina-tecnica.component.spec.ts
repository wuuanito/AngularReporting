import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaTecnicaComponent } from './oficina-tecnica.component';

describe('OficinaTecnicaComponent', () => {
  let component: OficinaTecnicaComponent;
  let fixture: ComponentFixture<OficinaTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OficinaTecnicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OficinaTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
