import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicituPersonalComponent } from './solicitu-personal.component';

describe('SolicituPersonalComponent', () => {
  let component: SolicituPersonalComponent;
  let fixture: ComponentFixture<SolicituPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicituPersonalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicituPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
