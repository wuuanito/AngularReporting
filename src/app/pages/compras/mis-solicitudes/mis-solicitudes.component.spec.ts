import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisSolicitudesComponent } from './mis-solicitudes.component';

describe('MisSolicitudesComponent', () => {
  let component: MisSolicitudesComponent;
  let fixture: ComponentFixture<MisSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisSolicitudesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
