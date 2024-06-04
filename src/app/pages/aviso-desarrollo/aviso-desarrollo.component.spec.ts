import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoDesarrolloComponent } from './aviso-desarrollo.component';

describe('AvisoDesarrolloComponent', () => {
  let component: AvisoDesarrolloComponent;
  let fixture: ComponentFixture<AvisoDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisoDesarrolloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvisoDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
