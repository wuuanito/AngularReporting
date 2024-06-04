import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncioOficinaTecnicaComponent } from './incio-oficina-tecnica.component';

describe('IncioOficinaTecnicaComponent', () => {
  let component: IncioOficinaTecnicaComponent;
  let fixture: ComponentFixture<IncioOficinaTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncioOficinaTecnicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncioOficinaTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
